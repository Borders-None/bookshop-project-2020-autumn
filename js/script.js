var hardcodedEmails = [
    {
      author: "Nataša",
      title: "Extra materials for learning",
      body: "Hey everyone, I am sending you the materials.",
    },
    {
        author: "State lottery",
      title: "Congratulations, you've won!",
      body: "WOW! You did it! You won! So much money!",
    },
    {
        author: "Mladen",
      title: "Don't forget your homework!",
      body: "hey, do not forget your homework for Tuesday!",
    },
    {
        author: "ACME",
      title: "Job interview",
      body:
        "When do you have time to stop by for an interview? Would next week work for you?",
    },
    {
        author: "Josip",
      title: "Practice makes perfect!",
      body:
        "I just wanted to say – please try out those examples we talked about!",
    },
    {
        author: "Dražen",
      title: "Next class will be about...",
      body:
        "Hello, in the next class we will learn exciting new things about ReactJS!",
    },
  ];



  function emailClicked() {
    const emailBody = this.children[0];
    if (emailBody.classList.contains("email-body-hidden")) {
      emailBody.classList.remove("email-body-hidden");
    } else {
      emailBody.classList.add("email-body-hidden");
    }
  }
  
  function showEmail(email) {
    const newDiv = document.createElement("div");
    const newContent = document.createTextNode(email.author + " – " + email.title);
    newDiv.appendChild(newContent);
    newDiv.className = "email";
    // add the body of the email
    const emailBody = document.createElement("p");
    const emailBodyContent = document.createTextNode(email.body);
    emailBody.className = "email-body-hidden";
    emailBody.appendChild(emailBodyContent);
    newDiv.appendChild(emailBody);
    newDiv.onclick = emailClicked;
    const containerDiv = document.querySelector(".container");
    containerDiv.appendChild(newDiv);
  }
  
  function showAllEmails(emails) {
    const containerDiv = document.querySelector(".container");
    containerDiv.innerHTML = "";
  
    emails.forEach((email) => {
      showEmail(email);
    });
  }
  
  function myMailClicked(event) {
    let headerTitle = event.target;
    if (headerTitle.innerHTML === "MMM") {
      headerTitle.innerHTML = "MyMightyMail";
    } else {
      headerTitle.innerHTML = "MMM";
    }
  }
  
  function displayEmailSendStatus(text, isError) {
    var message = document.createTextNode(text);
    const output = document.querySelector("#output");
  
    output.innerHTML = "";
    output.appendChild(message);
  
    output.classList.remove("output-success");
    output.classList.remove("output-error");
  
    if (isError) {
      output.classList.add("output-error");
    } else {
      output.classList.add("output-success");
    }
  }
  
  function validateEmail(email) {
    const authorInput = document.getElementById("author-3-validation");
    const titleInput = document.getElementById("title-3-validation");
    const bodyInput = document.getElementById("body-3-validation");
  
    const validationText = "This field is required!";
  
    var isEmailValid = true;
  
    if (!email.author) {
      authorInput.innerHTML = validationText;
      isEmailValid = false;
    } else {
      authorInput.innerHTML = "";
    }
  
    if (!email.title) {
      titleInput.innerHTML = validationText;
      isEmailValid = false;
    } else {
      titleInput.innerHTML = "";
    }
  
    if (!email.body) {
      bodyInput.innerHTML = validationText;
      isEmailValid = false;
    } else {
      bodyInput.innerHTML = "";
    }
  
    return isEmailValid;
  }
  
  // Fetch e-mails functions
  function fetchEmailsLocally() {
    showAllEmails(hardcodedEmails);
  }
  
  function fetchEmails() {
    // fetch email data in JSON format from our HTTP API
    fetch("https://bookshop-api.mirkwood.dev/books/")
      .then(function (response) {
        console.log(response.status);
        return response.json();
      })
      .then(function (emails) {
        console.log(emails);
        showAllEmails(emails);
      });
  }
  
  function fetchEmailsFromRestApi() {
    const containerDiv = document.querySelector(".container");
    containerDiv.innerHTML = "Loading...";
  
    // fetch e-mail data in JSON format from our HTTP API
    fetch("http://localhost:3000/api/emails")
      .then(function (response) {
        console.log(response.status);
        return response.json();
      })
      .then(function (response) {
        console.log(response);
        showAllEmails(response.emails);
      });
  }
  
  function sendEmailFormButtonClicked(event) {
    event.preventDefault();
  
    const emailData = new FormData(event.target);
  
    console.log("Sending email...");
    fetch("http://localhost:3000/api/emails", {
      method: "POST",
      body: emailData,
    })
      .then(function (response) {
        console.log(response.status);
  
        if (!response.ok) {
          throw new Error("Error while sending the book!");
        }
  
        return response.json();
      })
      .then(function (response) {
        console.log(response);
        displayEmailSendStatus(response.message, false);
      })
      .catch((error) => {
        displayEmailSendStatus(error, true);
      });
  }
  
  function sendEmailForm3ButtonClicked(event) {
    event.preventDefault();
    // Getting all the data from input elements
    const authorInput = document.getElementById("author-3");
    const titleInput = document.getElementById("title-3");
    const bodyInput = document.getElementById("body-3");
    const formButton = document.getElementById("form-3-submit");
    var email = {
        author: authorInput.value,
      title: titleInput.value,
      body: bodyInput.value,
    };
    console.log(email);
    var isEmailValid = validateEmail(email);
    if (!isEmailValid) {
      return;
    }
    console.log("Sending email...");
  
    formButton.setAttribute("disabled", "true");
  
    fetch("http://localhost:3000/api/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then(function (response) {
        console.log(response.status);
  
        if (!response.ok) {
          throw new Error("Error while sending the e-mail!");
        }
        return response.json();
      })
      .then(function (response) {
        console.log(response);
        formButton.removeAttribute("disabled");
        displayEmailSendStatus(response.message, false);
      })
      .catch((error) => {
        displayEmailSendStatus(error, true);
        formButton.removeAttribute("disabled");
      });
      // DISABLE BUTTON OUTSIDE fetch
      formButton.removeAttribute("disabled");
  }
  
  function main() {
    //fetchEmailsLocally();
    //fetchEmails();
    fetchEmailsFromRestApi();
  }
  
  window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    main();
  });
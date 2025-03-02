// A simple chatbot that responds with some predefined answers
function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
      output = "Hello! My name is Jarvis and I am your course advisor for today. How can I help you?";
    } else if (input.includes("how are you")) {
      output = "I'm doing fine, thank you for asking.";
    }  else if (input.includes("Where can I read everything I need to know about my course?")) {
      output = "The Student Handbooks are your 'go-to' documents for everything you need to know about your course";
    }  else if (input.includes("how many courses")) {
      output = "Typically, students take around 4-5 courses per semester, depending on your workload and extracurricular activities.";
    } else if (input.includes("internship") || input.includes("research opportunities")) {
      output = "You should start looking for internships early. Consider joining research labs or applying for co-op programs to gain hands-on experience.";
    } else if (input.includes("skills") || input.includes("programming languages")) {
      output = "Focus on languages like Python, Java, or C++. Learning tools such as Git, SQL, and cloud platforms will also be valuable.";
    }  else {
      output = "Sorry, I don't understand that. Please try asking about courses, internships, or career paths.";
    }  
    return output;
  }

  // Display the user message on the chat
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Display the bot message on the chat
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Send the user message and get the bot response
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);

  // Add a keypress event listener to the input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });

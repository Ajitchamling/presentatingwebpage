function add(){
   const ajit = document.querySelector('.been');
   const chamling = document.querySelector('#place');
   const robocha = document.querySelector('#holder');
   const rai = document.querySelector('#textinside');
   ajit.value="";
   rai.value="";
   robocha.value="";
   chamling.value="";

    alert("Your form is successfully submitted!"); 

 }

// chart bot
const responses = {
   "tips": "For great photos, remember the rule of thirds, use good lighting, and keep your subject in focus.",
   "gear": "For beginners, DSLRs and mirrorless cameras from brands like Canon, Nikon, or Sony are great choices.",
   "editing": "Try Adobe Lightroom for easy photo editing! It’s user-friendly and has many features for both beginners and pros.",
   "history": "The first photograph was taken in 1826 by Joseph Nicéphore Niépce. It was called 'View from the Window at Le Gras.'",
   "styles": "Popular photography styles include portrait, landscape, street, and macro photography. Try experimenting to find your favorite!"
};

// Toggle chat visibility
document.getElementById("chatToggle").addEventListener("click", function() {
   const chatContainer = document.getElementById("chatContainer");
   if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
       chatContainer.style.display = "block"; // Show chat container
   } else {
       chatContainer.style.display = "none"; // Hide chat container
   }
});

document.getElementById("sendButton").addEventListener("click", function() {
   const userInput = document.getElementById("userInput").value;
   addMessage("You: " + userInput);
   document.getElementById("userInput").value = "";

   const response = getResponse(userInput);
   addMessage("Chatbot: " + response);
});

function addMessage(message) {
   const chatbox = document.getElementById("chatbox");
   chatbox.innerHTML += `<p>${message}</p>`;
   chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

function getResponse(question) {
   if (question.toLowerCase().includes("tip")) {
       return responses.tips;
   } else if (question.toLowerCase().includes("gear") || question.toLowerCase().includes("camera")) {
       return responses.gear;
   } else if (question.toLowerCase().includes("edit")) {
       return responses.editing;
   } else if (question.toLowerCase().includes("history")) {
       return responses.history;
   } else if (question.toLowerCase().includes("style")) {
       return responses.styles;
   } else {
       return "I'm here to help with photography! Ask me about tips, gear, editing, history, or styles.";
   }
}
 
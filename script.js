function handleKeyPress(event) {
    if (event.key === 'Enter') {
        getResponse();
    }
}

function getResponse() {
    const userInput = document.getElementById("user-input");
    const messages = document.getElementById("messages");

    const userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = userInput.value;
    messages.appendChild(userMessage);

    userInput.value = ""; // Clear the input field

    const aiMessage = document.createElement("div");
    aiMessage.classList.add("message");
    aiMessage.textContent = "My pleasure";
    messages.appendChild(aiMessage);

    messages.scrollTop = messages.scrollHeight; // Scroll to the bottom
}

function initChat() {
    const messages = document.getElementById("messages");
    const aiInitialMessage = document.createElement("div");
    aiInitialMessage.classList.add("message");
    aiInitialMessage.textContent = "Hello! Welcome to Chick-Fil-AI. How can I help you today?";
    messages.appendChild(aiInitialMessage);
}

initChat();

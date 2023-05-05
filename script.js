function getResponse() {
    const userInput = document.getElementById("user-input");
    const aiResponse = document.getElementById("ai-response");

    userInput.value = ""; // Clear the input field
    aiResponse.innerHTML = "My pleasure";
}

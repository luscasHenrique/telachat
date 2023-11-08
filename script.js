document.addEventListener("DOMContentLoaded", function () {
    // Obtenha referências aos elementos HTML relevantes
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");

    // Adicione um ouvinte de eventos ao botão de envio
    sendButton.addEventListener("click", function () {
        const messageText = messageInput.value;
        if (messageText.trim() !== "") {
            appendUserMessage(messageText);

            // Simula uma mensagem de resposta após um pequeno atraso
            setTimeout(() => {
                appendResponseMessage("Olá!");
            }, 1000);

            messageInput.value = "";
        }
    });

    // Adicione um ouvinte de eventos ao pressionar a tecla Enter no campo de entrada de mensagem
    messageInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            sendButton.click(); // Simule o clique no botão de envio
        }
    });

    // Função para anexar uma mensagem do usuário à área de chat
    function appendUserMessage(text) {
        const message = document.createElement("div");
        message.className = "message user-message";
        message.innerText = text;
        chatMessages.appendChild(message);
    }

    // Função para anexar uma mensagem de resposta à área de chat
    function appendResponseMessage(text) {
        const message = document.createElement("div");
        message.className = "message response-message";
        message.innerText = text;
        chatMessages.appendChild(message);
    }
});

const socket = new WebSocket('wss://example.com/socket');

socket.onmessage = (event) => {
  console.log("Mensagem do servidor:", event.data);
};
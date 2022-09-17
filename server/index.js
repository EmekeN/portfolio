const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3001;

const getUniqueID = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return s4() + s4() + "-" + s4();
};


server.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.static("dist"));
app.get("/", function (request, response) {
  const rootDir = __dirname.replace("/server", "");
  console.log("ROOT DIR: ", rootDir);
  response.sendFile(`${rootDir}/index.html`);
});

// const WebSocket = require("ws");
// const server = require("http").createServer(app);
// const webSocketServer = new WebSocket.WebSocketServer({
//   server,
//   clientTracking: true,
// });

// webSocketServer.on("connection", function connection(socket, request, client) {
//   socket.send(JSON.stringify("Welcome New Client"));
//   socket.on("message", function incoming(message) {
//     console.log("Message From Client: ", message.toString());
//   });
// });

// comment.createTable().catch((error) => {
//   console.log(`Error: ${JSON.stringify(error)}`);
// });

// app.post("/createComment", async function (request, response) {
//   const { body } = request;
//   comment.createComment(body).then((result) => {
//     response.send(result);
//     webSocketServer.clients.forEach((client) => {
//       client.send(JSON.stringify({ type: "newComment", id: result?.id }));
//     });
//   });
// });

// app.get("/getComment", function (request, response) {
//   const { body } = request;
//   console.log("body ", body);
//   const { id } = body;
//   console.log("id: ", id);
//   comment.getComment(id).then((result) => {
//     console.log("result: ", result);
//     response.send(result);
//   });
// });

// app.get("/getComments", function (request, response) {
//   comment.getComments().then((result) => {
//     response.send(result);
//   });
// });

// app.delete("/deleteComments", function (request, response) {
//   comment.deleteComments().then((result) => {
//     response.send(result);
//   });
// });

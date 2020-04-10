const express = require("express");

const server = express();

const actionsRouter = require("./actions/actionsRouter");
const projectsRouter = require("./projects/projectsRouter");

server.use(express.json());
server.use(logger);

server.use("/api/actions", actionsRouter);
server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => {
	res.send("Server running...");
});

// middleware
function logger(req, res, next) {
	console.log(
		`${req.method} ${req.originalUrl} ${new Date().toLocaleString()}`
	);

	next();
}

module.exports = server;

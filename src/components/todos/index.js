const todosRouter = require("express").Router();
const catchErrors = require("../../hoc/catchErrors");
const todosController = require("./todosController");

todosRouter.post("/todos", catchErrors(todosController.createTodo));

module.exports = todosRouter;

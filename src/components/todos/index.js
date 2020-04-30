const todosRouter = require("express").Router();
const catchErrors = require("../../hoc/catchErrors");
const todosController = require("./todosController");

todosRouter.post("/todos", catchErrors(todosController.createTodo));
todosRouter.get(
  "/todos/type/:type",
  catchErrors(todosController.getAllTodosByType)
);
todosRouter.get("/todos/:id", catchErrors(todosController.getTodoById));
todosRouter.put("/todos/:id", catchErrors(todosController.taskCompleted));
todosRouter.delete("/todos/:id", catchErrors(todosController.deleteTodo));

module.exports = todosRouter;

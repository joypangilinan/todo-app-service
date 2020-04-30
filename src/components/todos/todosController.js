const httpErrors = require("http-errors");
const joiValidator = require("../../utils/joiValidator");
const todoSchema = require("./todosRequestSchema");
const todoService = require("./todosService");

const todosController = {};

todosController.createTodo = async (req, res) => {
  const { error, value: validatedRequestBody } = joiValidator(
    req.body,
    todoSchema.createTodo
  );

  if (error) res.status(500).send(error.details);

  const todoInfo = validatedRequestBody;

  const result = await todoService.createTodo(todoInfo);

  res.json(result);
};

todosController.getAllTodosByType = async (req, res) => {
  const { type } = req.params;

  const result = await todoService.getAllTodosByType(type);

  res.json(result);
};

todosController.getTodoById = async (req, res) => {
  const { id } = req.params;

  const result = await todoService.getTodoById(id);

  res.json(result);
};

todosController.taskCompleted = async (req, res) => {
  const { id } = req.params;

  const result = await todoService.taskCompleted(id);

  res.json(result);
};

todosController.deleteTodo = async (req, res) => {
  const { id } = req.params;

  const result = await todoService.deleteTodo(id);

  res.json(result);
};

module.exports = todosController;

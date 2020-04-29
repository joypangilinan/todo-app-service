const httpErrors = require("http-errors");
const joiValidator = require("../../utils/joiValidator");
const todoSchema = require("./todosRequestSchema");
const todoService = require("./todosService");

const todosController = {};

todosController.createTodo = async (req, res) => {
  const { error, value: validatedRequesrBody } = joiValidator(
    req.body,
    todoSchema.createTodo
  );
  if (error) throw httpErrors.BadRequest(error.details);

  const todoInfo = validatedRequesrBody;

  const result = await todoService.createTodo(todoInfo);

  res.json(result);
};

module.exports = todosController;

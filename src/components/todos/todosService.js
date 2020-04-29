const httpErrors = require("http-errors");
const Todo = require("../../models/Todo");

const todoService = {};

todoService.createTodo = async (todoInfo) => {
  const todo = await Todo.create({
    ...todoInfo,
  });

  await todo.save();

  return {
    todo,
  };
};

module.exports = todoService;

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

todoService.getAllTodosByType = async (type) => {
  const todos = await Todo.find({ type });

  return { todos };
};

todoService.getTodoById = async (id) => {
  const todo = await Todo.findOne({ _id: id });

  if (!todo) throw httpErrors.NotFound();

  return {
    todo,
  };
};

todoService.taskCompleted = async (id) => {
  const todoCompleted = await Todo.findOne(
    { _id: id },
    { _id: 0, completed: 1 }
  );

  if (!todoCompleted) throw httpErrors.NotFound();

  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: id },
    { completed: !todoCompleted.completed },
    { new: true }
  );

  return {
    updatedTodo,
  };
};

todoService.deleteTodo = async (id) => {
  const deleteTodo = await Todo.findOneAndDelete({ _id: id });

  if (!deleteTodo) throw httpErrors.NotFound();

  return {
    deleteTodo,
  };
};
module.exports = todoService;

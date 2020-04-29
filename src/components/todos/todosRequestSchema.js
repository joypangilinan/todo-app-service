const Joi = require("@hapi/joi");

const todoSchema = {};

todoSchema.createTodo = Joi.object({
  task: Joi.string().required(),
  type: Joi.string().valid("work", "personal").required(),
});

module.exports = todoSchema;

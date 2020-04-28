const apiRoutes = require("express").Route();

apiRoutes.use(require("./todos"));

module.exports = apiRoutes;

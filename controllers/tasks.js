const getAllTasks = (req, res) => {
  res.send("all items from");
};

const createTask = (req, res) => {
  res.json(req.body);
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update Tasks");
};
const deleteTask = (req, res) => {
  res.send("delete Tasks");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

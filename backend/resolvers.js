const DAILY_TASKS = require("./fake_data");
const resolvers = {
  Query: {
    fetchTask: (parent, args, context, info) => {
      return DAILY_TASKS[args.input.id];
    },
    fetchTasks: (parent, args, context, info) => {
      return DAILY_TASKS;
    }
  },
  Mutation: {
    addTask: (parent, args, context, info) => {
      const {
        input: { name, completed }
      } = args;
      const nextId = DAILY_TASKS[DAILY_TASKS.length - 1].id + 1;
      const newTask = {
        task: name,
        completed: completed,
        id: nextId
      };
      DAILY_TASKS.push(newTask);
      return newTask;
    },
    updateTask: (parent, args, context, info) => {
      const {
        input: { id, name, completed }
      } = args;
      const updateTask = DAILY_TASKS.filter(task => {
        return task.id == id;
      });
      if (name) {
        updateTask[0].task = task;
      }
      if (completed) {
        updateTask[0].completed = completed;
      }
      DAILY_TASKS.push(updateTask);
      return updateTask[0];
    }
  }
};

module.exports = resolvers;

const tasks = {
  tasks: [
    {
      text: "uthna",
      completed: true,
    },
    {
      text: "hagna",
      completed: false,
    },
    {
      text: "nahana",
      completed: false,
    },
  ],
  getTasksToDo() {
      const tasksToDo = this.tasks.filter((task) => { 
        return !task.completed
      })
      return tasksToDo;
  }
};

console.log(tasks.getTasksToDo())
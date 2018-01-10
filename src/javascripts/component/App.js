import React from "react";

import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

import base from "../base";

class App extends React.Component {
  constructor() {
    super();
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);

    this.state = {
      tasks: {}
    };
  }

  componentWillMount() {
    const ref = base.syncState(`/task`, {
      context: this,
      state: "tasks"
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addTask(task) {
    //copy all existing state without overwriting existing (spread operator)
    const tasks = { ...this.state.tasks };

    //add timestamp to make it a unique key of states
    const timeStamp = Date.now();
    tasks[`${task}-${timeStamp}`] = task;

    //add to states
    this.setState({ tasks: tasks });
  }

  removeTask(key) {
    const tasks = { ...this.state.tasks };

    //setting it to null
    tasks[key] = null;

    //update to states
    this.setState({ tasks: tasks });
  }

  render() {
    return (
      <div>
        <AddTaskForm addTask={this.addTask} />
        <div className="container">
          <ul>
            <TaskList tasks={this.state.tasks} removeTask={this.removeTask} />
          </ul>
        </div>
      </div>
    );
  }
}
export default App;

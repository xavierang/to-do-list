import React from "react";

class TaskList extends React.Component {
  constructor() {
    super();
    this.renderTask = this.renderTask.bind(this);
  }

  renderTask(key) {
    return (
      <li key={key}>
        {this.props.tasks[key]}
        <button onClick={() => this.props.removeTask(key)}>&times;</button>
      </li>
    );
  }

  render() {
    return <div>{Object.keys(this.props.tasks).map(this.renderTask)}</div>;
  }
}

export default TaskList;

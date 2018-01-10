import React from "react";

class AddTaskForm extends React.Component {
  constructor() {
    super();
    this.createTask = this.createTask.bind(this);
  }

  createTask(event) {
    event.preventDefault();

    const task = this.name.value;

    this.props.addTask(task);

    //clears form after submit
    this.form.reset();
  }

  render() {
    return (
      <form
        ref={input => (this.form = input)}
        className="listform"
        onSubmit={this.createTask}
      >
        <input
          ref={input => (this.name = input)}
          type="text"
          placeholder="Insert things to do"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
export default AddTaskForm;

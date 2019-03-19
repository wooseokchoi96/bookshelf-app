import React from "react";

class Form extends React.Component {
  state = {
    title: "",
    author: "",
    img: ""
  };

  changeHandler = e => {
    console.log("changed");
    this.setState({
      [e.target.placeholder]: e.target.value
    });
  };

  submitHandler = e => {
    console.log("submitted");
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      title: "",
      author: "",
      img: ""
    });
  };
  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="title"
          value={this.state.title}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          placeholder="author"
          value={this.state.author}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          placeholder="img"
          value={this.state.img}
          onChange={this.changeHandler}
        />
        <button>Add Book</button>
      </form>
    );
  }
}

export default Form;

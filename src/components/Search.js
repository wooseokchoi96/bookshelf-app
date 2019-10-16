import React from "react";

class Search extends React.Component{
  state = {
    text : ''
  }

  changeHandler = (e) => {
    this.setState({ text : e.target.value });
  }

  submitHandler = (e) => {
    e.preventDefault(); 
    this.props.search(this.state.text);
    this.setState({ text : '' });
  }

  render(){
    return(
      <form onSubmit={(e) => this.submitHandler(e)}> 
        <h3>Search for a book: </h3>
        <input type='text' placeholder='Book name' value={this.state.text} onChange={(e) => this.changeHandler(e)}/>
        <input type='submit' value='Search'/>
        <input type='button' value='See all' onClick={() => this.props.search(this.state.text)}/>
      </form>
    );
  };
};

export default Search;

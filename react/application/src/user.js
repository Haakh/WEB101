import React from 'react';
class UserInput extends React.Component {


  constructor() {

    super();

    this.state = {
      input: 'Enter Your Task'
    };

  }

  onSubmitHandler(event) {

    this.props.onAddItem(this.state.input);
    this.setState({
      input: ''
    });

    event.preventDefault();

  }

  onChangeHandler(e){
    this.setState({input: e.target.value})
  }

  render() {

    var that = this;

    return (
      <div >
        <form className="input-group" onSubmit={this.onSubmitHandler.bind(that)}>
          <input type="text"  placeholder ="Add More" className="form-control" value={this.state.input} onChange={this.onChangeHandler.bind(that)} />
          <span className="input-group-btn">
            <input type="submit" className="btn btn-default" value="Add item" />
          </span>
        </form>
        <hr />
      </div>
      );
  }

}

export default UserInput;

import React from 'react';
import _ from 'lodash';
export default class TodosListItem extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isRemoved: false
    };
  }

  render(){
    return (
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td> {this.props.task} </td>
        <td>
          <button onClick={this.onRemoveClick.bind(this)}>Remove</button>
        </td>
      </tr>
    );

  }

  onRemoveClick(){
    this.setState({ isRemoved: true});
  }
}

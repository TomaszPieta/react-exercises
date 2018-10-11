import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    }
  }
  handleTextChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }
  handleAddItem = (event) => {
    event.preventDefault();
    let newItem = {
      id: Date.now(),
      text: this.state.text,
      done: false
    }
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }))
  }
  markItemCompleted = (itemId) => {
    let updatedItems = this.state.items.map(item => {
      if (itemId === item.id)
        item.done = !item.done;
      return item;
    });
    this.setState({
      items: [].concat(updatedItems)
    });
  }
  handleDeleteItem = (itemId) => {
    let updatesItems = this.state.items.filter(item => {
      return item.id !== itemId;
    });
    this.setState({
      items: [].concat(updatedItems)
    });
  }
  render() {
    return ( <
      div >
      <
      h1 > ToDo List < /h1> <
      TodoList items = {
        this.state.items
      }
      onItemCompleted = {
        this.markItemCompleted
      }
      onDeleteItem = {
        this.handleDeleteItem
      }
      /> <
      form >
      <
      input type = "text"
      onChange = {
        this.handleTextChange
      }
      value = {
        this.state.text
      }
      /><br / > < br / >
      <
      button onClick = {
        this.handleAddItem
      }
      disabled = {!this.state.text
      } > {
        "Add"
      } < /button> <
      /form> <
      /div>
    )
  }
}
class TodoList extends React.Component {
  render() {
    return ( <
      ul > {
        this.props.items.map(item => ( <
          TodoItem key = {
            item.id
          }
          id = {
            item.id
          }
          text = {
            item.text
          }
          completed = {
            item.done
          }
          onItemCompleted = {
            this.props.onItemCompleted
          }
          onDeleteItem = {
            this.props.onDeleteItem
          }
          />
        ))
      } <
      /ul>
    )
  }
}
class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }
  markCompleted = (event) => {
    this.props.onItemCompleted(this.props.id);
  }
  deleteItem = (event) => {
    this.props.onDeleteItem(this.props.id)
  }
  render() {
    return ( <
      li >
      <
      label >
      <
      input type = "checkbox"
      onChange = {
        this.markCompleted
      }
      /> &nbsp;  {
        this.props.text
      } <
      /label> &nbsp;  <
      button type = "button"
      onClick = {
        this.deleteItem
      } > X < /button> <
      /li>
    )
  }
}

ReactDOM.render( < App / > , document.getElementById('app'));
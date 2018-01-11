import React, { Component } from 'react';
import TabList from './TabList';

class App extends Component {
  state = {
    inputValue: '',
    list: []
  }

  onChange = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  sendToArray = e => {
    e.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  delete = index => {
    this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list
    })
  }

  render() {

    return (
      <div>
        <h1>To Do List</h1>
        <form onSubmit={this.sendToArray}>
          <input type="text" value={this.state.inputValue} onChange={this.onChange} />
          <button >SEND</button>
        </form>
        <TabList tab={this.state.list} delete={this.delete} />
      </div>
    );
  }
}

export default App;

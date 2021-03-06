import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';
import Note from './components/Note';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showNote: false
    };
  }

  toggleNote = () => {
    this.setState({
      showNote: ! this.state.showNote
    });
  }

  getNotes = () => {
    axios.get('http://192.168.0.7:3000')
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err.response.data))
  }



render() {
  const { showNote } = this.state;
  return (
    <div className="App">
      <Nav toggleNote={this.toggleNote} showNote={showNote} />
      { showNote ? <Note /> : <List getNotes={this.getNotes}/> }
    </div>
  );
}
}

export default App;

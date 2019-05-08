import React from 'react';
import FriendsList from './Components/FriendsList/FriendsList'
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      friends: [],
    }
  }

  render() {
    return (
      <div className="App">
        <p>My Awesome App</p>
        <FriendsList />
      </div>
    );
  }
}

export default App;

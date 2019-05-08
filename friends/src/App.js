import React from 'react';
import FriendsList from './Components/FriendsList/FriendsList'
import axios from 'axios'
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    // fetch any initial data we need
    // axios.get(), axios.post(), .put(), .delete()
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
        // this.setState({ error: err.response.message });
      });

    //     this.setState({ items: data });
  }

  render() {
    console.log('friends', this.state.friends)
    return (
      <div className="App">
        <p>My Awesome Friends App</p>
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;

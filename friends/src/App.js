import React from 'react';
import FriendsList from './Components/FriendsList/FriendsList'
import axios from 'axios'
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      friends: [],
      postSuccessMessage: '',
      postError: '',
    }
  }

  componentDidMount() {
    // fetch any initial data we need
    // axios.get(), axios.post(), .put(), .delete()
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
        // this.setState({ error: err.response.message });
      });

    //     this.setState({ items: data });
  }

  addFriend = (event, props) => {
    event.preventDefault()
    axios
      .post(`http://localhost:5000/friends`, props)
      .then(response => {
        console.log('response', response);
        this.setState({
          friends: response.data,
          postSuccessMessage: response.statusText,
          postError: ""
        });
      })

      .catch(err => {
        console.log(err);
        this.setState({
          postSuccessMessage: "",
          postError: err.response.data.Error
        });
      });
  };

  deleteFriend = (props) => {
    axios
      .delete(`http://localhost:5000/friends/${props}`, props)
      .then(response => {
        console.log('response', response);
        this.setState({
          friends: response.data,
          postSuccessMessage: response.statusText,
          postError: ""
        });
      })

      .catch(err => {
        console.log(err);
        this.setState({
          postSuccessMessage: "",
          postError: err.response.data.Error
        });
      });
  };

  render() {
    console.log(this.state.friends)
    console.log(this.state)
    return (
      <div className="App">
        <p>My Awesome Friends App</p>
        <FriendsList friends={this.state.friends} addFriend={this.addFriend} deleteFriend={this.deleteFriend} />
      </div>
    );
  }
}

export default App;

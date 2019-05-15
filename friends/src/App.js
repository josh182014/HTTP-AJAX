import React from 'react';
import FriendsList from './Components/FriendsList/FriendsList'
import axios from 'axios'
import './App.scss';

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

  updateFriend = (props, data) => {
    axios
      .put(`http://localhost:5000/friends/${props}`, data)
      .then(response => {
        console.log('response', response);
        this.setState({
          friends: response.data,
          deleteSuccessMessage: response.statusText,
          deleteError: ""
        });
      })

      .catch(err => {
        console.log(err);
        this.setState({
          deleteSuccessMessage: "",
          deleteError: err.response.data.Error
        });
      });
  };

  deleteFriend = (props) => {
    axios
      .delete(`http://localhost:5000/friends/${props}`)
      .then(response => {
        console.log('response', response);
        this.setState({
          friends: response.data,
          deleteSuccessMessage: response.statusText,
          deleteError: ""
        });
      })

      .catch(err => {
        console.log(err);
        this.setState({
          deleteSuccessMessage: "",
          deleteError: err.response.data.Error
        });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>My Awesome Friends App</h1>
        <FriendsList friends={this.state.friends} addFriend={this.addFriend} deleteFriend={this.deleteFriend} updateFriend={this.updateFriend} />
      </div>
    );
  }
}

export default App;

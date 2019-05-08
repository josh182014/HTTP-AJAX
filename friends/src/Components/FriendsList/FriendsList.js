import React from 'react';
import Friend from '../Friend/Friend'

class FriendsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            email: '',
            id: '',
        }
    }

    UpdateFormHandler = () => {
        this.setState({ name: '', age: '', email: '', id: '' })
    }

    FormHandler = (event) => {
        this.props.addFriend(event, this.state)
        this.setState({ name: '', age: '', email: '', id: '' })
    }
    
    ChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value, id: Date.now()})
    }

    render() {
        return (
            <div>
                {this.props.friends.map(friend => (
                    <div key={friend.id}>
                        <Friend friend={friend} key={friend.id} deleteFriend={this.props.deleteFriend} updateFriend={this.props.updateFriend} formData={this.state} UpdateFormHandler={this.UpdateFormHandler} />
                    </div>
                ))}
                <form onSubmit={this.FormHandler}>
                    <input required
                        placeholder={'Name'}
                        autoComplete='off'
                        value={this.state.name}
                        name='name'
                        onChange={this.ChangeHandler}>
                    </input>
                    <input 
                        placeholder={'Age'}
                        autoComplete='off'
                        value={this.state.age}
                        name='age'
                        onChange={this.ChangeHandler}>
                    </input>
                    <input 
                        placeholder={'Email'}
                        autoComplete='off'
                        value={this.state.email}
                        name='email'
                        onChange={this.ChangeHandler}> 
                    </input>
                    <button type='submit'>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default FriendsList
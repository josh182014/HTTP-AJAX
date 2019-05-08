import React from 'react';
import Friend from '../Friend/Friend'

class FriendsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '',
            email: '',
        }
    }

    FormHandler = (event) => {
        event.preventDefault()
        console.log('added!', event.target)
    }
    
    ChangeHandler = (event) => {
        console.log(event.target.value)
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                {this.props.friends.map(friend => (
                    <div key={friend.id}>
                        <Friend friend={friend} key={friend.id}/>
                    </div>
                ))}
                <form onSubmit={this.FormHandler}>
                    <input 
                        placeholder={'Name'}
                        value={this.state.name}
                        name='name'
                        onChange={this.ChangeHandler}>
                    </input>
                    <input 
                        placeholder={'Age'}
                        value={this.state.age}
                        name='age'
                        onChange={this.ChangeHandler}>
                    </input>
                    <input 
                        placeholder={'Email'}
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
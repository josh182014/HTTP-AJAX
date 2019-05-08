import React from 'react';

function Friend(props) {

    const deleteFriend = () => {
        props.deleteFriend(props.friend.id)
    }
    
    return (
    <div>
        Name: <strong>{props.friend.name}</strong> Age: {props.friend.age}
        <div>Update</div>
        <div onClick={deleteFriend}>Delete</div>
    </div>
    )
}

export default Friend
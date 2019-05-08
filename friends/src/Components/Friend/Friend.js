import React from 'react';

function Friend(props) {
    const updateFriend = () => {
        props.updateFriend(props.friend.id, props.formData)
        props.UpdateFormHandler()
    }

    const deleteFriend = () => {
        props.deleteFriend(props.friend.id)
    }

    return (
    <div>
        Name: <strong>{props.friend.name}</strong> Age: {props.friend.age}
        <button onClick={updateFriend}>Update</button>
        <button onClick={deleteFriend}>Delete</button>
    </div>
    )
}

export default Friend
import React from 'react';

function Friend(props) {
    let updatedFriendInfo = {}
    const updatedFriend = () => {
        if (props.formData.name.length > 0 ) {
            updatedFriendInfo.name = props.formData.name
        }
        else {
            updatedFriendInfo.name = props.friend.name
        }
        if (props.formData.age.length > 0 ) {
            updatedFriendInfo.age = props.formData.age
        }
        else {
            updatedFriendInfo.age = props.friend.age
        }
        if (props.formData.email.length > 0 ) {
            updatedFriendInfo.email = props.formData.email
        }
        else {
            updatedFriendInfo.email = props.friend.email
        }
    }
    
    const updateFriend = () => {
        props.updateFriend(props.friend.id, updatedFriendInfo)
        props.UpdateFormHandler()
    }

    const deleteFriend = () => {
        props.deleteFriend(props.friend.id)
    }
    updatedFriend()
    return (
    <div>
        Name: <strong>{props.friend.name}</strong> Age: {props.friend.age}
        <button onClick={updateFriend}>Update</button>
        <button onClick={deleteFriend}>Delete</button>
    </div>
    )
}

export default Friend
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
    <div className='friendWholeContainer'>
        <div className="FriendContainer">
            <div className='friendName'>
                Name:<strong>{props.friend.name}</strong>
            </div>
            <div className='friendAge'>
            Age: {props.friend.age}
            </div>
            <div className='friendAge'>
            Email: {props.friend.email}
            </div>
        </div>
        <div className='buttons'>
            <button onClick={updateFriend}>Update</button>
            <button onClick={deleteFriend}>Delete</button>
        </div>
    </div>
    )
}

export default Friend
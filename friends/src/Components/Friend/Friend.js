import React from 'react';

function Friend(props) {
    return (
    <div>
        Name: <strong>{props.friend.name}</strong> Age: {props.friend.age}
    </div>
    )
}

export default Friend
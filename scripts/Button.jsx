import * as React from 'react';
import { Socket } from './Socket';

function handleSubmit(event) {
    let newAddress = document.getElementById("address_input");
    let newUsername = document.getElementById("user_input");
    Socket.emit('new address input', {
       'address': newUsername.value + ':' +newAddress.value+'',
    });
    newAddress.value
    
    console.log('Sent the address ' + newAddress.value + ' to server!');
    newAddress.value = ''
    
    event.preventDefault();
}

export function Button() {
    return (
        <form onSubmit={handleSubmit}>
            <p><b>Username: </b><input id="user_input" placeholder="Username"></input></p>
            <input id="address_input" placeholder="Enter a USPS address"></input>
            <button> Send! </button>
        </form>
    );
}

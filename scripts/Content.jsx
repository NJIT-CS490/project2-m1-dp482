    
import * as React from 'react';


import { Button } from './Button';
import { Socket } from './Socket';

export function Content() {
    const [addresses, setAddresses] = React.useState([]);
    const [ UsersCount, setUsersCount] = React.useState([]);
    
    function getNewAddresses() {
        React.useEffect(() => {
            Socket.on('addresses received', (data) => {
                 console.log("Received addresses from server: " + data['allAddresses']);
                 setAddresses(data['allAddresses']);
            })
        });
    }
    getNewAddresses();
    
    function getUsersCount() {
        React.useEffect(() => {
            Socket.on('connected', (data) => {
                 console.log("Received addresses from server: " + data['test']);
                 setUsersCount(data['test']);
            })
        });
    }
    getUsersCount();
    
    function getUsersCount1() {
        React.useEffect(() => {
            Socket.on('disconnected', (data) => {
                console.log("Received addresses from server for disconnect: " + data['test']);
                setUsersCount(data['test']);
            })
        });
    }
    getUsersCount1();

    return (
        <div>
            <h1>Welcome To Text+</h1>
            <h2><b> Total users: {UsersCount}  </b></h2>
                <ol>
                    {
                    addresses.map(
                        (address, index)=> 
                        <li key={index}>{address} </li>
                        )
                    }
                </ol>
            <Button />
        </div>
    );
}

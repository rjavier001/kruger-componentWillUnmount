import React from 'react';

class User extends React.Component {
    componentWillUnmount() {
       alert('Deleted User successfully');
    }
    render() {
       return (
          <div>
             <h3>Username: Javier</h3>
             <h3>Email: javier@gmail.com</h3>
          </div>
       );
    }
 }
 export default User;
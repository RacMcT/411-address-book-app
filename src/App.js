import React, { useState } from 'react';
import './App.css';

// resource for syntax for displaying first and last name on same column in react!!
// https://stackoverflow.com/questions/57321083/displaying-firstname-and-last-name-in-the-same-column-in-react-table-2

function App() {
  let [users, setUsers] = useState([]);

  let fetchData = () => {
    fetch('https://randomuser.me/api?results=25')
      .then(res => res.json())
      .then(data => data.results.map(user => (
        {
          name: '${user.name.first} ${user.name.last}',
          phone: user.phone,
          email: user.email,
          pic: user.picture.thumbnail
        }
      )))
      .then(contacts => setUsers(contacts))
      // .catch(error => console.log('errr', error))-- do I need to add an error message?- ask Matt since was in the whiteboarding tests...
  
    };
  
  
  
  return (
<div>
      <ul>
       
      </ul>
    </div>
  );
}

export default App;

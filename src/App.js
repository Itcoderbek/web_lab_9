import React, { useEffect, useState } from 'react';
import List from './components/List';

function App() {
    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => response.json())
            .then(data => {
                const users = data.results.map(user => ({
                    userAvatar: user.picture.large,
                    firstName: user.name.first,
                    lastName: user.name.last,
                    location: `${user.location.city}, ${user.location.country}`,
                    email: user.email
                }));
                setUsersData(users);
            });
    }, []);

    return (
        <div className="App">
            {usersData.map(user => (
                <List
                    key={user.email}
                    userAvatar={user.userAvatar}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    location={user.location}
                    email={user.email}
                />
            ))}
        </div>
    );
}

export default App;

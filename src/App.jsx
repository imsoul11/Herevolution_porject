import React from 'react';
import Map from './Components/Map';
import FormUser from './Components/FormUser';
import './index.css';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  return (
    <div>
      <UserContextProvider>
        <Map />
        <FormUser />
      </UserContextProvider>
    </div>
  );
}

export default App;
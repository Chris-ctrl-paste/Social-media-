import React from 'react';
import Feed from './components/Feed';
import Header from './components/Header'
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { useStateValue } from './context/StateProvider';
import './css/App.css';

function App() {
  const [{ user },] = useStateValue();
  // const user = "null";



  return (
    <div className="App">

      {!user ? (
        <Login />
      ) : (
          <>
            <Header />

            <div className="app_body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )}


    </div>
  );
}

export default App;

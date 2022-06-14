import React from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <>  
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
        <hr />
        <Main />       
      </div>   
    </>
  )
}

export default App;
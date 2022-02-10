import './App.css';
import './styles/header.css';
import './styles/main.css';
import nav_buttons from './components/header.js';
import Update from './components/activityList.js';
import ShopingList from './components/shoppingList.js';
import LoggedButton from './components/loginButton';
import React from 'react';
 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title"><a href="index.html"><p>Organizer</p></a></div>
        {nav_buttons}
        <LoggedButton />
      </header>
      <main>
        <div className='list_of_activities'>
          <h2>List of activites</h2>
          <Update />
        </div>
        <div className='shoping_list'>
          <ShopingList />
        </div>
      </main>
    </div>
  );
}


export default App;

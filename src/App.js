import './App.css';
import './styles/header.css';
import './styles/main.css';
import nav_buttons from './components/header.js';
import Update from './components/activityList.js';
import ShopingList from './components/shoppingList.js';
import React from 'react';
 

const inputs = [
  {
    name: 'Name: ',
    ID: 'input_name',
    c_Name: 'c_inputs',
    type: 'text',
    placeholder: 'Name'
  },
  {
    name: 'From: ',
    ID: 'input_from_time',
    c_Name: 'c_inputs',
    type: 'time',
    placeholder: '07:00'
  },
  {
    name: 'To: ',
    ID: 'input_to_time',
    c_Name: 'c_inputs',
    type: 'time',
    placeholder: '08:00'
  },
  {
    name: 'Importance Level: ',
    ID: 'input_Ilevel',
    c_Name: 'c_inputs',
    type: 'text',
    placeholder: 'Chose the level, (high, low, medium)'
  },
  {
    name: 'Desciption: ',
    ID: 'input_descript',
    c_Name: 'c_inputs',
    type: 'textarea',
    placeholder: 'Describe your activities...'
  }
].map((object_m) => {
  return (
    <p key={object_m.name}>{object_m.name}<input id={object_m.ID} className={object_m.c_Name} type={object_m.type} placeholder={object_m.placeholder}/></p>
  );
});



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title"><a href="index.html"><p>Organizer</p></a></div>
        {nav_buttons}
      </header>
      <main>
        <div className="add_activity">
          <h3>Add your activity!</h3>
          {inputs}
        </div>
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

import React from 'react';


const nav_buttons = [
  {
    name: 'Calendar',
    id: '',
    href: '',
    class_name: 'nav_button'
  },

  {
    name: 'Training',
    id: '',
    href: '',
    class_name: 'nav_button'
  },

  {
    name: 'Contact',
    id: '',
    href: '',
    class_name: 'nav_button'
  }
].map((object) => {
  return(
   <div key={object.name}><a href={object.href}><p>{object.name}</p></a></div> 
  );
});


export default nav_buttons;
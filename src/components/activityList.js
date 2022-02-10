import React, { Component, createElement }  from "react";
import Element from './activityElement';

let array = [
  {
    id: 1,
    name: 'Work',
    time: '11.00 to 19.00', 
    describe: 'Create react application to my CV',
    level_of_importance: 'high'
  },

  {
    id: 2,
    name: 'Breakfast',
    time: '9.00 to 11.00',
    describe: 'Mniam mniam',
    level_of_importance: 'low'
  }
]


class List_of_activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.to,
      element: {
        name: '',
        time: '',
        describe: '',
        level_of_importance: ''
      }
    }
  }

  updating_list = () => {
    const name_activity = document.getElementById('input_name').value;
    const time = document.getElementById('input_from_time').value + ' to ' + document.getElementById('input_to_time').value;
    let describe_activity = document.getElementById('input_descript').value;
    let level_of_importance = document.getElementById('input_Ilevel').value;
    const ID = array.length + 1;
    level_of_importance = parseInt(level_of_importance, 10);
    
    if(level_of_importance <= 33) {
      level_of_importance = 'low'
    } else if(level_of_importance > 33 && level_of_importance <=66 ) {
      level_of_importance = 'medium'
    } else level_of_importance = 'high'
  
    this.setState({element: {
      id: ID,
      name: name_activity,
      time: time,
      describe: describe_activity,
      level_of_importance: level_of_importance
    }});
  }

  update = () => {
    let list2 = this.state.list;
    list2.push(this.state.element);
    this.setState({list: list2})
  }

  inputs = [
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
      type: 'range',
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
      <p key={object_m.ID} onChange={this.updating_list}>{object_m.name}<input id={object_m.ID} className={object_m.c_Name} type={object_m.type} placeholder={object_m.placeholder}/></p>
    );
  });

 
  render () {
    return (
      <div className="box">
        <div className="to">
          {this.inputs}
          <button className="update_act_list" onClick={this.update}>Add activities</button>
        </div>
        <div className="element">
          {this.state.list.map( obo => <Element key={obo.id} name={obo.name} describe={obo.describe} level={obo.level_of_importance} time={obo.time}/>)}
        </div>
      </div>
      );
  }  
}

function update_list() {
  return(
      <div>
        <List_of_activity to={array}/>
      </div>
  )
}




export default update_list;



import React, { Component, createElement }  from "react";
import Element from './activityElement';

let array = [
  {
    name: 'Work',
    time: '11.00 to 19.00', 
    describe: 'Create react application to my CV',
    level_of_importance: 'high'
  },

  {
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
    const describe_activity = document.getElementById('input_descript').value;
    const level_of_importance = document.getElementById('input_Ilevel').value;

    this.setState({element: {
      name: name_activity,
      time: time,
      describe: describe_activity,
      level_of_importance: level_of_importance
    }});
    
    let list2 = this.state.list;
    list2.push(this.state.element);
    this.setState({list: list2})
  }

 
  render () {
    return (<div className="element">
      <button className="update_act_list" onClick={this.updating_list}>Add activities</button>
        {this.state.list.map( obo => <Element key={obo.name} name={obo.name} describe={obo.describe} level={obo.level_of_importance} time={obo.time}/>)}
      </div>);
  }  
}

function update_list() {
  return(
      <List_of_activity to={array}/>
  )
}




export default update_list;



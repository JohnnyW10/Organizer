import React, { Component, createElement }  from "react";

let shoping_list = [
  'Beer',
  'Tomato',
  'Pasta'
]

class ShopingList extends React.Component { 
  constructor(props) {
    super(props)
    this.state = {
      shop_list: this.props.sh_list
    }
  }

  upload_shoping_list = () => {
    let el_sh_list = document.getElementById('shoping_item').value;
    console.log(el_sh_list);
    let list = this.state.shop_list;
    list.push(el_sh_list);
    this.setState({shop_list: list})
  }

  delete_from_list = (element) => {
    let chosen_element = element;
    let list = this.state.shop_list;
    let index = list.indexOf(chosen_element);
    if(index !== -1) {
      list.splice(index, 1);
    }
    this.setState({shop_list: list});
    
  }

  render () {
    return (
      <div>
        <h3>Shoping List</h3>
        <input type='text' id='shoping_item' placeholder="What you want to add ..."></input>
        <button onClick={this.upload_shoping_list}>Add to list</button>
        <h4>Click on the item you want to remove</h4>
        <div>
          {this.state.shop_list.map(to_buy => <p key={to_buy} onClick={() => this.delete_from_list(to_buy)} name={to_buy}>- {to_buy}</p>)}
        </div>
      </div>
    );
  }
}


function renddderrr() {
  return (<div>
    <ShopingList sh_list={shoping_list}/>
  </div>)
}

export default renddderrr;

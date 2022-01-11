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
    console.log(list)
  }

  render () {
    return (
      <div>
        <h3>Shoping List</h3>
        <input type='text' id='shoping_item' placeholder="What you want to add ..."></input>
        <button onClick={this.upload_shoping_list}>Add to list</button>
        <div>
          {this.state.shop_list.map(to_buy => <p key={to_buy} >- {to_buy}</p>)}
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
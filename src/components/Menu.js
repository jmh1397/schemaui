import React, { Component } from 'react';
import '../css/App.css';
import '../css/Menu.css';
import '../css/Buttons.css';
class Menu extends Component{
  constructor(props){
      super(props);
      this.state = {expGroups: Boolean(false)};
      this.handeClickGroups = this.handeClickGroups.bind(this);
  }
  handeClickGroups () {
      this.setState({expGroups: !this.state.expGroups});
  }
  clickEntities () {
      alert('Entities Form')
  }
  clickRelationships () {
      alert('Relationships Form')
  }
  render() {
            /*const { showForm } = this.state;*/
    return (
      <div class="col-2 col-s-2 menu">
        <ul>
          <li onClick={ this.handeClickGroups }>Groups</li>
              {this.state.expGroups ? <li>--New Group</li>:''}
              {this.state.expGroups ? <li>--Modify Group</li>:''}
          <li onClick={ this.clickEntities }>Entities </li>
          <li onClick={ this.clickRelationships  }>Relationships</li>
        </ul>
      </div>

    );
  }
}

export default Menu;
    /*
    {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
        constructor(props){
            super(props);
            this.state = {
                showForm: false
            };

            this.onClick = this.onClick.bind(this);

        }
        onClick () {
            this.setState({ showForm: true });
        }

        renderForm () {
           return (
               <div>
                   <form id= "add-app">
                       <label>Application Name : </label>
                       <input type="text"> </input>
                       <label> id : </label>
                       <input type="text" ></input>
                       <label>Server details : </label>
                       <input ></input>

                       <button>Create</button>
                  </form>
              </div>
           );
        }

<div class="col-2 col-s-2 menu">
    <optionButton onClick={ this.onClick }>Add Node</optionButton>
    {showForm && this.renderForm()}
</div>
*/

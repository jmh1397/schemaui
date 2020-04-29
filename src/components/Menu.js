import React, { Component } from 'react';
import '../css/App.css';
import '../css/Menu.css';
import '../css/Buttons.css';
class Menu extends Component{
  clickGroups () {
      alert('Groups Form')
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
                    <li onClick={ this.clickGroups }>Groups</li>
                    <li onClick={ this.clickEntities }>Entities </li>
                    <li onClick={ this.clickRelationships  }>Relationships</li>
                  </ul>
                </div>

            );
        }
  }

    export default Menu;
    /*
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

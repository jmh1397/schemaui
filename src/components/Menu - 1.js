import React, { Component } from 'react';
import '../css/App.css';
import '../css/Menu.css';
//import '../components/addEntity'
//import '../components/AddEntityButton'

const AddEntityButton = props => {
  return 'a'
}
const addEntity = props => {
render(){
  return(
    <div class="col-2 col-s-2 menu">
      <form action="/action_page.php">
        <div class="row">
          <label for="eame">Entity Name</label>
            <input type="text" id="ename" name="entityname" placeholder="No Spaces, a-z,1-9,-"/>
          </div>
        <div class="row">
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  )
}
class Menu extends Component {
    render(){
        return(
          <div class="col-2 col-s-2 menu">
              <ul>
                <li>New Entity</li>
                <li>-</li>
                <li>-</li>
                <li>-</li>
              </ul>
            </div>

        )
      }
    }

export default (Menu);
/*
<div id="Menu">
  <div class="col-2 col-s-2 menu">
     <optionButton onClick={addEntity}>Add Entity</optionButton>
  </div>
</div>
*/

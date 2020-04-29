import React, { Component } from 'react';
import '../App.css';
import '../css/Form.css';

class addEntity extends Component {
  /*
  constructor(props){
      super(props);
      this.state = {
          showForm: false
      };
  }
  */
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
}

export default (addEntity);

import React, { Component } from 'react';
import "./addnew.css"
import {connect} from 'react-redux'
import {addThings} from "../component/redux/action/addaction"

class Hello extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         title:this.name.titlename.value,
    //         desc:this.name.textname.value,
    //     }
    // }

    submitbtn=()=>{
       
       this.props.addThings();
    }
   
    render() {
      return (
          <div>
             <div className = "titleandname">
                <h2 id="title">Add New Thing</h2>
       

        <div class="tablee">
            <form>
                <label class="addnewthingsforms">Title:</label>
                <br />

                <input name="titlename" type="text" placeholder="Enter Title of to do Here" id="todotitleinput" />
                <br />
                <br />
                <br />
                <br />
                <label class="addnewthingsforms">Description:</label>
                <br />
                <textarea name="textname" id="todoDescriptiontextarea"> Enter Title of to do Here
                </textarea>
                <br />
                <br />
                <input type="submit" value="Add Your Thing" id="formsubmitbutton" onClick={this.submitbtn}/>
            </form>

        </div>        
 
    </div>
             
    
</div>
       
      );
    }
  }
  
  export default connect(null, {
    addThings
})(Hello)
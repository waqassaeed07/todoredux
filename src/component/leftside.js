import React, { Component } from 'react';
import {Route,Link} from "react-router-dom";
import "./leftside.css";
import circle from"./photo/circle.png";
import pricetag from"./photo/pricetag-name.png";
import New from "./addnew"
import Mydays from "./mydays"
// import Addnewthing from "./addnewthing";
// import Myday from "./myday";



class leftside extends Component {
    date="new date()"
    render() {
      return (

          <div className="container-fluid">
        <div className="row">
            <div className="col-md-3 leftside">
                <img src={circle} id="userpic"/>
                <h4 id="usernametop">M.Fayyaz</h4>
                <br/>
                <p id="joinera">{this.props.date}Joined: 15 sep 2018</p>
                <input type="search" placeholder="search" id="searchbox"/>
                <br/>
                
                <h4 id="firsttag">
                    <p className="startingspace"></p>
                    <img src={pricetag} className="leftsideimg"/>
                   <Link to="/myday" className="lefttagnames">
                    MY DAY
                    </Link>
                </h4>

                <h4 className="othertags">
                    <p className="startingspace"></p>
                    <img src={pricetag} className="leftsideimg"/>
                    <p className="lefttagnames">Important</p>
                </h4>

                <h4 className="othertags">
                    <p className="startingspace"></p>
                    <img src={pricetag} className="leftsideimg"/>
                    <p className="lefttagnames">Done task</p>
                </h4>

                <h4 className="othertags">
                    <p className="startingspace"></p>
                    <img src={pricetag} className="leftsideimg"/>
                    <p className="lefttagnames">Comming task</p>
                </h4>
                
                <hr id="hra"/>
                <Link to="/new">

                <h5 id="plusnewlist">+ new list</h5>
                </Link>
              

            </div>
            <div className="col-md-9 rightside">
            
           <Route path="/myday" component={Mydays}/>
            <Route path="/new" component={New}/>
         

         </div>
         
           


</div>
</div>
       
      );
    }
  }
  
  export default leftside;
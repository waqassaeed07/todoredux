import React, { Component } from 'react';

import whitelogo from "./photo/main-logo-white.png"
import star from "./photo/star.png"
import ticklogo from "./photo/main-logo-tick.png"
import "./mydays.css"
import {connect} from "react-redux"


class Mydays extends Component {
    

    render() {
        return (
      
            
                <div className="titleandname">
                    <h2 id="title">my day</h2>
                    <h5 id="times">{this.props.date.now}Saturday 15 Sep 2018 </h5>
                   

                    <div className="tablee">

                        <div className="addrow">
                        {this.props.nname}
                        
                            {/* <img src={whitelogo} className="whitepic"/>
                            <p className="tdpera">new</p>
                            <img src={star} className="starpic"/> */}
                        </div>
                        


                        {/* <div className="addrow">
                            <img src={ticklogo} className="whitepic"/>
                            <p className="tdpera"><s>Meeting With Client</s></p>
                            <img src={star} className="starpic"/>
                        </div> */}

                    </div>
                     </div>
   
      
      );
    }
}

const mapStateToProps = (store) => {
    console.log('state',store);
    
    return {
       nname : store.newall,
       

    }
}




export default connect(mapStateToProps,null) (Mydays);
import { Addaction } from "../action/addaction"

let initialstate={
//    titlename:name,
//    descname:desc,
  

};


function Addreducer(state = initialstate , addaction) {
    switch(addaction.type){
        case'addthings':{
         


            return{
                ...state,
                name:`<div className="addrow">
                        
                <img src={whitelogo} className="whitepic"/>
                <p className="tdpera">${this.state.titlename}</p>
                <img src={star} className="starpic"/>
                </div>`
                  
                   

                }
            }
        
    
    default:
    return state;

    }

}





export default Addreducer;
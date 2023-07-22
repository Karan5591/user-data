import React from "react";

const TaskData= (props)=>{
   
        return(
           
            <div>
                <ul>
                    
                    <li>{props.data.Name}</li>
                    <li>{props.data.Age}</li>
                </ul>
            </div>
        )
    
}
export default TaskData;
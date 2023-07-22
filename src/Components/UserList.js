import React from "react";
import TaskData from "./TaskData"

const UserList= (props)=>{
  
    const renderUserList= props.userData.map((uData)=>{
        
        return(
           
            <div>
                <ul>
                    <TaskData key={uData.id} data={uData}/>
                    
                </ul>
            </div>
        )
    })
    return(
        <div>{renderUserList}</div> 
    )
}
export default UserList;
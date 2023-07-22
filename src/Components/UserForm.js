import React, {useState} from 'react';

const UserForm =(props)=>{

    const[name, setName]=useState('')
    const[age, setAge]=useState('')
   
    
   let submitForm=(e)=>{
        e.preventDefault();
        if(name==="" || age==='')
        {
            alert("All Field are mandatory")
            return;
        }
        else if(age<1)
        {
            alert("Age can't be less than 1");
            return;
        }
       
       props.userData({
        Name: name,
        Age: age,
        id:Date.now()
       })
        setAge('')
        setName('')
    }
    
    return(
        <div>
            <div>
                <form onSubmit={submitForm}>
        <label>User Name</label>
        <div>
        <input type='text'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        ></input></div><br></br>
<div>
        <label>Age (in years)</label></div>
<div>   <input type='text'
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        ></input></div><br></br>
        

        <button>Add User</button>
        </form>
        
        </div>
        
        
        </div>
    );

}
export default UserForm;
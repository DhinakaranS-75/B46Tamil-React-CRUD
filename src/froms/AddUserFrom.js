import React, {useState} from 'react';


const AddUserForm = (props) => {

    const initUser = {id: null, name: '', username: ''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username) {
           handleChange(e, props.addUser(user));
        }
    }

    return (
        <form>
            <label>Name</label>
            <input  type="text" value={user.name} name="name" onChange={handleChange}  required/> <br />
            <label>Username</label> 
            <input  type="text" value={user.username} name="username" onChange={handleChange} required/> <br />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Add user</button>
        </form>
    )

    
}

export default AddUserForm;
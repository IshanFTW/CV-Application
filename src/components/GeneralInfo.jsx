import { useState } from "react";

export function GeneralInfo(){
    const [info, setInfo] = useState({name:'', email: '', phone: ''});
    const [isEditing, setIsEditing] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
      };

    const handleSubmit = () => {
        console.log('Submitted', info)

        setIsEditing(false)
    }

    const handleEditClick = () => {
        setIsEditing(true);
    }

    return(
        <div>
            <h3>General Info: </h3>
            <label htmlFor="name">Name:</label>
                {isEditing ? (
                    <input 
                    type="text" 
                    name="name"
                    value={info.name} 
                    id="name" 
                    onChange={handleInputChange}
                />
                ) : (
                    <div>{info.name}</div>
                )}
            <label htmlFor="email">Email:</label>
                {isEditing ? (
                    <input 
                    type="email"
                    name="email"
                    value={info.email}
                    id="email"
                    onChange={handleInputChange}
                />
                ) : (
                    <div>{info.email}</div>
                )}
            <label htmlFor="phone">Phone no:</label>
                {isEditing ? (
                    <input 
                    type="number"
                    name="phone"
                    value={info.phone}
                    id="phone"
                    onChange={handleInputChange}
                />
                ) : (
                    <div>{info.phone}</div>
                )}

                {isEditing ? (
                    <button onClick={handleSubmit}>Submit</button>
                ): (
                    <button onClick={handleEditClick}>Edit</button>
                )}
        </div>
    )

}
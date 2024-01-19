import { useState } from "react";

export function PracticalExperience(){
    const [info, setInfo] = useState({companyName:"", position: "", dateFrom: "", dateTill: ""})
    const [isEditing, setIsEditing] = useState(true);

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    }

    const handleSubmit = () => {
        console.log('Submitted', info)

        setIsEditing(false)
    }

    const handleEdit = () => {
        setIsEditing(true)
    }

    return(
        <div>
            <h3>Practical Experience</h3>
            <label htmlFor="companyName">Company Name:</label>
            {
                isEditing ? (
                    <input 
                    type="text"
                    name="companyName"
                    value={info.companyName}
                    id="companyName"
                    onChange={handleInput}
                />
                ) : (
                    <div>{info.companyName}</div>
                )
            }
               
            <label htmlFor="position">Position Title:</label>
            {
                isEditing ? (
                    <input 
                    type="text"
                    name="position"
                    value={info.position}
                    id="position"
                    onChange={handleInput}
                />
                ) : (
                    <div>{info.position}</div>
                )
            }
               
            <label htmlFor="dateFrom">Date From:</label>
            {
                isEditing ? (
                    <input 
                    type="date"
                    name="dateFrom"
                    value={info.dateFrom}
                    id="dateFrom"
                    onChange={handleInput}
                />
                ) : (
                    <div>{info.dateFrom}</div>
                    )
            }
               
            <label htmlFor="dateTill">Date until:</label>
            {
                isEditing ? (
                    <input 
                    type="date"
                    name="dateTill"
                    value={info.dateTill}
                    id="dateTill"
                    onChange={handleInput}
                /> 
                ) : (
                    <div>{info.dateTill}</div>
                )
            }
               {isEditing ? (
                    <button onClick={handleSubmit}>Submit</button>
                ): (
                    <button onClick={handleEdit}>Edit</button>
                )}
                    
        </div>
    )
}
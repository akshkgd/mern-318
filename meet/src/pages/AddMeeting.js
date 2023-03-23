import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
function AddMeeting() {
    let [loaderStatus, setLoaderStatus] = useState(false);
    let titleInput = useRef();
    let dateInput = useRef();
    let descInput = useRef();
    let imgInput = useRef();
    let navigate = useNavigate();
    function addMeetingHandler(){
        setLoaderStatus(true);
        
        

        let tempMeeting = {
            title :  titleInput.current.value,
            date :  dateInput.current.value,
            desc: descInput.current.value,
            img: imgInput.current.value,
        }
        fetch('https://mern-318-default-rtdb.firebaseio.com/meet.json', {
            method: 'post',
            body: JSON.stringify(tempMeeting)
        }).then(()=>{
            setLoaderStatus(false);
            navigate('/');
        })
    }
    return (
        <div className="add-container">
            <h2>Add New Meeting</h2>

            <input type='text' ref={titleInput} placeholder="Enter the Meeting Title" />
            <input type='text' ref={imgInput} placeholder="Enter the Image title" />
            <input type='datetime-local' ref={dateInput} placeholder="Enter the Time" />
            <input type='text' ref={descInput} placeholder="Enter the Description" />
            <button className="btn" onClick={addMeetingHandler}>Add Meeting <div className={loaderStatus==true ? "btn-loader" : ""}></div> </button>
        </div>
    )
}
export default AddMeeting;
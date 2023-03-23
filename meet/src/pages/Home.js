import MeetingCard from "../components/MeetingCard";
import { useState, useEffect } from "react";
import { resolvePath } from "react-router-dom";
function Home() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const [loadingStatus, setLoadingStatus] = useState(false);
    const [meetings, setMeetings] = useState([]);

    // fetch the meeting
    useEffect(()=>{
        fetch('https://mern-318-default-rtdb.firebaseio.com/meet.json').then(
        response=> response.json()).then(data=>{
            let tempMeetings = []
            for(const key in data){
                let meeting = {
                    id: key,
                    ...data[key]
                }
                tempMeetings.push(meeting)
            }
            setMeetings(tempMeetings);
        })
    },[])
    useEffect(()=>{
        console.log('All meetings: ', meetings)
    }, [meetings])

    return (
        <div>
            <div className={loadingStatus == true ? "loader" : ""}></div>
            <div className="container">

                {
                meetings.filter((meeting)=>{
                        let today = new Date();
                        return (new Date(meeting.date) > today)
                }).map((meeting)=>{
                        let date = new Date(meeting.date);
                        let fDate = date.toLocaleDateString('en', options)
                        let time = date.toLocaleTimeString('en', {hour: "2-digit", minute:"2-digit"})
                        let meetingTime = time + " " + fDate;
                        let img = "https://source.unsplash.com/1600x900/?" + meeting.img;
                       return <MeetingCard date={meetingTime} img={img}  title={meeting.title} desc={meeting.desc}/>
                    })
                }
            </div>
        </div>

    )
}
export default Home;
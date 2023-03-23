function MeetingCard(props) {
    return (
        <div className="meeting-card">
            <h2 className="title">{props.title}</h2>
            <p className="date">{props.date}</p>
            <p className="desc">{props.desc}</p>
            <button className="join-btn">Join Meeting</button>

        </div>
    )
}
export default MeetingCard;
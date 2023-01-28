function FirstComponent(props){
    return(
        <div className="card">
            <img className="card-img" src={"https://source.unsplash.com/1600x800/?" + props.img} />
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <p>4.5</p>
        </div>
        
    )
}
export default FirstComponent;
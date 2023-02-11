function FirstComponent(props){
    function orderFoodHandler(){
        console.log("Order successful for ", props.name, " at ", props.price, " rs.")
    }
    return(
        <div className="card" onClick={orderFoodHandler}>
            <div className="card-header">
                <img className="card-img" src={"https://source.unsplash.com/1600x800/?" + props.img} />
                <p className="ratings">{props.rating} ({props.votes} Votes)</p>
            </div>
            <div className="flex">
                <h3>{props.name}</h3>
                <p className={props.rating> 4.4 ? "tag" : props.rating >4 && props.votes> 1000? "popular" : "d-none"}>{props.rating> 4.4 ? "Must Try" : props.rating > 4 && props.votes> 1000? "Most Popular" : ""}</p>
            </div>
            <p>{props.desc}</p>
            {/* <p>4.5</p> */}
        </div>
        
    )
}
export default FirstComponent;
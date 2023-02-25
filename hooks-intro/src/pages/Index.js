import hero from './templates.png'
function Index(){
    return(
        <div className='hero-container'>
            
            <img src={hero} />
            <h1 className='title'>Organize all your docs in one place using splash</h1> 
            <button className='btn'>Explore splash for free</button>
        </div>
    )
}
export default Index;
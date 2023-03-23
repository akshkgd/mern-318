import {Link} from 'react-router-dom'
import hero from './templates.png'
import style from './index.module.css'
function Index(){
    return(
        <div className='hero-container'>
            
            <img src={hero} />
            <h1 className='title'>Organize all your docs in one place using splash</h1> 
            <Link className={style.btn} to="/about">Explore splash for free</Link>


            <div className='container'>

            </div>
        </div>
    )
}
export default Index;
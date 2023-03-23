import {Link} from 'react-router-dom'
import styles from './about.module.css'
function About(){
    return(
        <div className="App">
            <h1>About Page</h1> 
            <Link className={styles.btn} to="/about">Explore splash for free</Link>
        </div>
    )
}
export default About;
import Navigation from './Navigation/Navigation'
import style from './Header.module.css'

const Header = () => {
    return ( 
        
        <div className={style['main-container']}>
            <Navigation/>
            
        </div>
     );
}
 
export default Header;
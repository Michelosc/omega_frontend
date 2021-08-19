import './style.css'
import Img from '../../../assets/omega.png'

function Header(props){
    return(
        <>

                    <header className='header'>
                       
                        <img className='logoOmega' src={Img} alt='logo Omega'/>
                        
                        <ul>
                            <li>Olá Cliente</li>
                        </ul>
                        
                    </header>
                    

        </>
    );
}
export default Header;
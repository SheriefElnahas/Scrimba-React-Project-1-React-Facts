import './Header.css';
import logo from './assets/react-logo.png'

function Header() {
    return (
        <div className='header'>
            <div className='header-logo'>
                <img className='header-image' src={logo} alt="" />
                <h1 className='header-heading'>ReactFacts</h1>
           
            </div>
            <p className='header-paragraph'>React Course - Project 1</p>
        </div>
    )
}

export default Header;
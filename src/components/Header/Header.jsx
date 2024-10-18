import './Header.scss';
import bellTalk from '../../assets/icons/bell-talk.svg'
import bellHero from '../../assets/images/BellICon.webp'
const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={bellTalk} alt='logo'></img>
            </div>
            <div className='header__nav'>
                <a className='header__nav-home'>Home</a>
                <a className='header__nav-resources'>Events</a>
                <a className='header__nav-support'>Support</a>
            </div>
        </div>
    )
}

export default Header
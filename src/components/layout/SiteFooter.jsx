import {Link} from 'react-router-dom';
import logo from '../../assets/drawing-brush-education-learning-painting-school-study-svgrepo-com.svg'

function FirstFooterNav() {
    return (
        <nav className='flex-1'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Neuro">Neuro</Link></li>
            </ul>
        </nav>
    );
}

function SecondFooterNav() {
    return (
        <nav className='flex-1'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Neuro">Neuro</Link></li>
            </ul>
        </nav>
    );
}

function ThirdFooterNav() {
    return (
        <nav className='flex-1'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Neuro">Neuro</Link></li>
            </ul>
        </nav>
    );
}

function FooterLogo() {
    return (
        <div className='flex-none1 w-12'>
            <Link to='/'>
                <img src={logo}></img>
            </Link>
        </div>
    );
}

export default function SiteFooter() {
    return (
        <footer className='flex'>
            <FooterLogo/>
            <FirstFooterNav/>
            <SecondFooterNav/>
            <ThirdFooterNav/>
        </footer>
    );
}
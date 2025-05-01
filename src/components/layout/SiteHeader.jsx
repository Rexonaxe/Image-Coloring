import {Link} from 'react-router-dom';
import logo from '../../assets/drawing-brush-education-learning-painting-school-study-svgrepo-com.svg'
import LinkNav from "./LinkNav.jsx";

function HeaderNav() {
    return (
        <nav className='hidden md:flex absolute left-1/2 transform -translate-x-1/2'>
            <ul className="flex gap-6">
                <li><LinkNav to="/">Главная</LinkNav></li>
                <li><LinkNav to="/About">О нас</LinkNav></li>
                <li><LinkNav to="/Blog">Блог</LinkNav></li>
                <li><LinkNav to="/Neuro">Окрашивание</LinkNav></li>
            </ul>
        </nav>
    );
}

function HeaderLogo() {
    return (
        <div className="flex-none w-12 h-12">
            <LinkNav to='/'>
                <img src={logo} alt='Логотип' className='hover:opacity-80 transition-opacity'/>
            </LinkNav>
        </div>
    );
}

function HeaderText() {
    return (
        <p className='flex-none text-gray-700'> +7-999-999-99-99 </p>
    );
}

export default function SiteHeader() {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-gray-50 h-16 shadow-md">
            <HeaderLogo />
            <HeaderNav/>
            <HeaderText/>
        </header>
    );
}
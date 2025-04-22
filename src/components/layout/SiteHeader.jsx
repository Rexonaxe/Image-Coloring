import {Link} from 'react-router-dom';
import logo from '../../assets/drawing-brush-education-learning-painting-school-study-svgrepo-com.svg'

function HeaderNav() {
    return (
        <nav>
            <ul className="flex gap-6">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Blog">Blog</Link></li>
                <li><Link to="/Neuro">Neuro</Link></li>
            </ul>
        </nav>
    );
}

function HeaderLogo() {
    return (
        <div className="flex-none w-12 h-12">
            <Link to='/'>
                <img src={logo} alt='Логотип' />
            </Link>
        </div>
    );
}

function HeaderNumber() {
    return (
        <p className='flex-none'> +7-(999)-999-99-99 </p>
    );
}

export default function SiteHeader() {
    return (
        <header className="flex items-center justify-between px-4 py-2 bg-gray-100">
            <HeaderLogo />
            <HeaderNav/>
            <HeaderNumber/>
        </header>
    );
}
import {Link} from 'react-router-dom';
import logo from '../../assets/drawing-brush-education-learning-painting-school-study-svgrepo-com.svg'
import LinkNav from "./LinkNav.jsx";
import SocialLinks from "./SocialLinks.jsx";

function FirstFooterNav() {
    return (
        <nav className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Меню</h3>
            <ul className="space-y-2">
                <li><LinkNav className="hover:text-blue-500 transition" to="/">Главная</LinkNav></li>
            </ul>
        </nav>
    );
}

function SecondFooterNav() {
    return (
        <nav className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Меню</h3>
            <ul className="space-y-2">
                <li><LinkNav className="hover:text-blue-500 transition" to="/">Главная</LinkNav></li>
            </ul>
        </nav>
    );
}

function ThirdFooterNav() {
    return (
        <nav className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Мы в социальных сетях</h3>
            <ul className="space-y-2">
                <li><LinkNav to="/"><SocialLinks/></LinkNav></li>
            </ul>
        </nav>
    );
}

function FooterLogo() {
    return (
        <div className="w-24 mb-8 lg:mb-0">
            <LinkNav to="/">
                <img
                    src={logo}
                    alt="Логотип"
                    className="hover:opacity-80 transition-opacity"
                />
            </LinkNav>
        </div>
    );
}

export default function SiteFooter() {
    return (
        <footer className='bg-gradient-to-b from-white to-neutral-100 py-12 px-4 border-t border-gray-200'>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <FooterLogo/>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full lg:w-auto">
                        <FirstFooterNav/>
                        <SecondFooterNav/>
                        <ThirdFooterNav/>
                    </div>
                </div>
            </div>
        </footer>
    );
}
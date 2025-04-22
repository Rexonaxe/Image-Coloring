import {Routes, Route} from 'react-router-dom';
import SiteHeader from "./components/layout/SiteHeader.jsx";
import SiteFooter from "./components/layout/SiteFooter.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";
import BlogPage from "./pages/Blog/BlogPage.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import NeuroPage from "./pages/Neuro/NeuroPage.jsx";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/neuro" element={<NeuroPage/>}/>
            </Routes>
        </>
    );
}



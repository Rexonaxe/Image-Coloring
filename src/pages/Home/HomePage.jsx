import SiteHeader from "../../components/layout/SiteHeader.jsx";
import SiteFooter from "../../components/layout/SiteFooter.jsx";
import {Link} from "react-router-dom";

function HeroSection() {
    return (
        <section className='HeroSection flex-col items-center justify-between'>
            <div className='flex'>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Окрашивание
                    фотографии</h1>
                <p>Вау, да не может быть, это же очередное краткое описание функционала приложения, которое вы
                    прочитаете,
                    но вам как было похуй, так и останется похуй.</p>
                <Link to="/Neuro">
                    <button className="border-gray-300 bg-gradient-to-r from-blue-300 via-red-300 to-pink-400 rounded">
                        <p
                            className="bg-gradient-to-l from-blue-300 via-red-300 to-pink-400">Окрасить изображение</p>
                    </button>
                </Link>
            </div>
            <div className='flex'></div>
        </section>
    );

}

function FeatureSection() {
    return (
        <section className='FeatureSection flex bg-gradient-to-b from-neutral-400 via-white to-neutral-400'>
            <div className='flex-col'>
                <p className='text-6xl font-bold image-fill-text' >Окрашивайте
                    моментально.</p>
                <p>Вам нужно всего лишь в очередной раз прочитать еще одно описание.</p>
                <p>И убедиться в том, что данный абзац не содержит никакой полезной информации, очередная постная
                    хуйня.</p>
            </div>
            <div className='grid'></div>
        </section>
    );
}

function DescribeSection() {
    return (
        <section className='DescribeSection flex-col bg-gradient-to-b from-neutral-400 via-white to-neutral-400'>
            <div className='flex-col'>
                <p>Как восстановить цвета фотографии с помощью нашего приложения?</p>
                <p>А то же вы слепые, не увидели ебаную кнопку "Окрасить изображение" сверху.</p>
            </div>
            <div className='flex'>
                <div className=''>1</div>
                <div className=''>2</div>
                <div className=''>3</div>
            </div>
        </section>
    );
}

export default function HomePage() {
    return (
        <>
            <SiteHeader/>
            <HeroSection/>
            <FeatureSection/>
            <DescribeSection/>
            <SiteFooter/>
        </>
    );
};
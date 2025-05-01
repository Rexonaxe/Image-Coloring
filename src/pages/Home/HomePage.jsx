import SiteHeader from "../../components/layout/SiteHeader.jsx";
import SiteFooter from "../../components/layout/SiteFooter.jsx";
import {Link} from "react-router-dom";
import HeroSectionPic from "/src/assets/HeroSectionPic.png"

function HeroSection() {
    return (
        <section className="HeroSection bg-gradient-to-b from-neutral-100 via-white to-neutral-100">
            <div className="container mx-auto px-4 py-12 md:py-20">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-20">
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-6">
                            Окрашивание фотографии
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                            Превратите чёрно-белые снимки в цветные с помощью нейросети.
                            Просто загрузите фото — алгоритм сделает всё остальное!
                        </p>
                        <Link
                            to="/Neuro"
                            className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            Окрасить изображение
                        </Link>
                    </div>

                    <div className="flex-1 max-w-2xl w-full">
                        <img
                            alt="Демонстрационное изображение"
                            src={HeroSectionPic}
                            className="w-full h-auto rounded-3xl shadow-xl border-8 border-white transform hover:scale-[1.02] transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}


function FeatureSection() {
    return (
        <section className="FeatureSection bg-gradient-to-b from-neutral-100 via-white to-neutral-100 py-20 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Текстовый блок */}
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-6">
                            Окрашивайте моментально
                        </h2>
                        <div className="space-y-4 max-w-2xl">
                            <p className="text-lg text-gray-600">
                                Просто загрузите фото - наша нейросеть сделает всё автоматически за считанные секунды.
                            </p>
                            <p className="text-lg text-gray-600">
                                Никаких сложных настроек - профессиональный результат в один клик.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="text-2xl font-bold text-blue-500 mb-3">1</div>
                                <h3 className="text-xl font-semibold mb-2">Быстрая обработка</h3>
                                <p className="text-gray-600">До 10 секунд на фото среднего размера</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="text-2xl font-bold text-blue-500 mb-3">2</div>
                                <h3 className="text-xl font-semibold mb-2">Реалистичные цвета</h3>
                                <p className="text-gray-600">Алгоритм учитывает естественные цветовые палитры</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="text-2xl font-bold text-blue-500 mb-3">3</div>
                                <h3 className="text-xl font-semibold mb-2">Без ограничений</h3>
                                <p className="text-gray-600">Работаем с любыми форматами изображений</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="text-2xl font-bold text-blue-500 mb-3">4</div>
                                <h3 className="text-xl font-semibold mb-2">Простота</h3>
                                <p className="text-gray-600">Интерфейс понятен без инструкций</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function DescribeSection() {
    return (
        <section className="DescribeSection py-12 bg-gradient-to-b from-neutral-100 via-white to-neutral-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Как восстановить цвета фотографии с помощью нашего приложения?
                    </h2>
                    <p className="text-lg text-gray-600">
                        Простое решение для возвращения яркости вашим снимкам
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    <div className="flex-1 max-w-md bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <div className="text-4xl font-bold text-blue-500 mb-4">1</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Загрузите фото</h3>
                        <p className="text-gray-600">
                            Перетащите вашу фотографию в выделенную область или выберите файл через проводник.
                            Поддерживаются форматы JPG, PNG и HEIC.
                        </p>
                    </div>

                    <div className="flex-1 max-w-md bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <div className="text-4xl font-bold text-blue-500 mb-4">2</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Автоматическая обработка</h3>
                        <p className="text-gray-600">
                            Наш алгоритм анализирует изображение и автоматически восстанавливает цвета,
                            баланс белого и контрастность.
                        </p>
                    </div>

                    <div className="flex-1 max-w-md bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                        <div className="text-4xl font-bold text-blue-500 mb-4">3</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Скачайте результат</h3>
                        <p className="text-gray-600">
                            Просмотрите обработанное фото, при необходимости внесите ручные корректировки
                            и сохраните результат в высоком качестве.
                        </p>
                    </div>
                </div>
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
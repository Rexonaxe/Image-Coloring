import SiteHeader from "../../components/layout/SiteHeader.jsx";
import SiteFooter from "../../components/layout/SiteFooter.jsx";

function FirstSection() {
    return (
        <section className="w-full h-96 bg-gray-100 flex items-center justify-center relative">
            <input
                type="file"
                accept="image/*"
                className="absolute w-full h-full opacity-0 cursor-pointer z-10"
                onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                        console.log(file);
                    }
                }}
            />
            <div className="text-center z-0">
                <h2 className="text-2xl font-bold mb-2">Загрузите изображение</h2>
                <p className="text-gray-600">Перетащите файл сюда или кликните для выбора</p>
            </div>
        </section>
    );
}

export default function NeuroPage() {
    return (
        <>
            <SiteHeader/>
            <FirstSection/>
            <SiteFooter/>
        </>
    );
}
;
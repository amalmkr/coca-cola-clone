import cola from "../assets/Coca-Cola-Logo.webp"
import fanta from "../assets/fanta.webp"
import limca from "../assets/Limca.webp"
import maaza from "../assets/maaza.webp"
import  sprite from "../assets/Sprite.webp"
import thumps from "../assets/thumps-up.webp"
function Brands(){

    return(
        <>
        <section>
        <h2 className=" font-['Archivo_Black'] mt-30 text-black text-3xl">Explore Our Brands</h2>
        <div className="grid grid-cols-3 gap-10 justify-items-center max-w-3xl mx-auto mt-10">
        <div className=""><img src={cola} alt="" className="w-50 h-50 border-2 border-white p-5 rounded-3xl shadow-2xl hover:border hover:scale-110 transition-all duration-300 " /></div>
        <div><img src={fanta} alt="" className="w-50 h-50 border-2 border-white p-5 rounded-3xl shadow-2xl hover:border hover:scale-110 transition-all duration-300"/></div>
        <div><img src={limca} alt="" className="w-50 h-50 border-2 border-white p-5 rounded-3xl shadow-2xl hover:border hover:scale-110 transition-all duration-300"/></div>
        <div><img src={maaza} alt="" className="w-50 h-50 border-2 border-white p-5 rounded-3xl shadow-2xl hover:border hover:scale-110 transition-all duration-300"/></div>
        <div><img src={sprite} alt="" className="w-50 h-50 border-2 border-white p-5 rounded-3xl shadow-2xl hover:border hover:scale-110 transition-all duration-300"/></div>
        <div><img src={thumps} alt="" className="w-50 h-50 border-2 border-white p-5 rounded-3xl shadow-2xl hover:border hover:scale-110 transition-all duration-300"/></div>
        </div>
        <div className="mt-10"><button className="border-2 bg-black text-white px-20 rounded-4xl font-['Archivo_Black'] py-2" >View All</button></div>
        </section>
        </>
    )
};

export default Brands;
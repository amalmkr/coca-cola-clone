import Rukk from "../assets/rukk-mat.webp"


function Limca(){
    return(
        <>
        <section className="">
        <div className="mt-15 justify-center flex">
            <img src={Rukk} className="rounded-2xl w-[600px] shadow-lg mt-18 -mb-10 z-10" />
            <div className="shadow-lg w-[500px] text-left px-8 z-50 bg-white rounded-2xl -ml-20 ">
            <h2 className="text-black font-['Archivo_Black'] text-2xl mt-20 ml-5">Presenting the “Super 30”<br/> glorious years of Limca® Book of Records!</h2>
            <p className="mt-6 text-black text-xl font-['Inter'] leading-tight ml-5" >This year's Limca Book of Records is a combined edition of two challenging years and celebrates stellar victories and accomplishments in human endeavor, education, adventure, business, cinema, the natural world, literature, and the arts.</p>
            <div className="py-10"><button className="border-2 px-10 rounded-2xl text-black font-['Archivo_Black'] hover:bg-[#efefef]">Learn more</button></div>
            </div>
        </div>
        </section>
        </>
    )
};

export default Limca;
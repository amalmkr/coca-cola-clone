import experience from  "../assets/experience.webp"

function Experiance(){

    return(
        <>
        <section className="min-h-8/12 w-full" >
            <h2 className="text-3xl font-['Archivo_Black'] text-black text-center">
            Experiences
            </h2>
            <div className="flex flex-col-reverse md:flex-row md:p-1 justify-evenly">
                <div className="md:text-left text-black md:mt-30 mt-10 text-center">
                    <p className="font-['Archivo_Black'] text-3xl leading-tight">Coke Studio Bharat: Drink.<br/> Scan. Unlock Exclusive<br/> Music.</p>
                    <button className="mt-6 border-2 px-15 text-xl rounded-4xl hover:bg-[#dddddd]">Explore Now</button>
                </div>
                <div className="md:w-120 mt-10">
                    <img src={experience} className="rounded-2xl shadow-lg w-90 md:w-200 mx-auto "/>
                </div>
            </div>        
        </section>
        </>
    )
};

export default Experiance;
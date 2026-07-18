import experience from  "../assets/experience.webp"

function Experiance(){

    return(
        <>
        <section className="min-h-8/12 w-full" >
            <h2 className="text-3xl font-['Archivo_Black'] text-black">
            Experiences
            </h2>
            <div className="flex p-10 justify-evenly">
                <div className="text-left text-black mt-30 ">
                    <p className="font-['Archivo_Black'] text-3xl leading-tight">Coke Studio Bharat: Drink.<br/> Scan. Unlock Exclusive<br/> Music.</p>
                    <button className="mt-6 border-2 px-15 text-xl rounded-4xl hover:bg-[#dddddd]">Explore Now</button>
                </div>
                <div className="">
                    <img src={experience} className="rounded-2xl w-120 shadow-lg"/>
                </div>
            </div>        
        </section>
        </>
    )
};

export default Experiance;
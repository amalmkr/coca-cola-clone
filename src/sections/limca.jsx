import Rukk from "../assets/rukk-mat.webp";

function Limca() {
  return (
    <section className="py-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-7xl mx-auto px-5">

        {/* Image */}
        <img
          src={Rukk}
          alt="Limca Book of Records"
          className="w-full max-w-[650px] rounded-2xl shadow-lg"
        />

        {/* Card */}
        <div
          className="
            bg-white
            rounded-2xl
            shadow-xl
            w-full
            max-w-[600px]
            p-8
            mt-6
            md:mt-0
            md:-ml-34
            md:mb-30
            relative
            z-10
            md:p-10
          "
        >
          <h2 className="text-black font-['Archivo_Black'] text-2xl md:text-4xl leading-tight">
            Presenting the “Super 30” glorious years of Limca® Book of Records!
          </h2>

          <p className="mt-6 text-black text-base leading-8">
            This year's Limca Book of Records is a combined edition of two
            challenging years and celebrates stellar victories and
            accomplishments in human endeavor, education, adventure, business,
            cinema, the natural world, literature, and the arts.
          </p>

          <button className="mt-10 border-2 border-black rounded-full px-12 py-3 font-['Archivo_Black'] hover:bg-gray-100 transition">
            Learn more
          </button>
        </div>

      </div>
    </section>
  );
}

export default Limca;
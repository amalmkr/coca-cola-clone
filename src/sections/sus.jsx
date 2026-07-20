import sus1 from "../assets/sus-news-1.webp";
import sus2 from "../assets/sus-news-2.webp";

function Sus() {
  return (
    <section className="py-16">
      <h2 className="text-black font-['Archivo_Black'] text-3xl mb-12 text-center">
        Sustainability news
      </h2>

      <div className="flex justify-center gap-10">


        <div className="bg-white rounded-2xl shadow-lg w-[500px] overflow-hidden flex flex-col">
          <img
            src={sus1}
            className="w-full h-72 object-cover"
            alt="World without waste"
          />

          <div className="p-8 flex flex-col flex-1">
            <h3 className="text-2xl font-['Archivo_Black'] text-black text-left">
              On a mission to a world without waste
            </h3>

            <p className="text-black text-left mt-4 text-sm leading-6">
              We aim to collect back packaging for recycling
              <br />
              equivalent to what we put out in the market by
              <br />
              2030.
            </p>

            <button className="mt-auto self-start pt-8 border-b-2 border-black text-black font-semibold hover:text-gray-600">
              Learn more &rarr;
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg w-[500px] overflow-hidden flex flex-col">
          <img
            src={sus2}
            className="w-full h-72 object-cover"
            alt="Sustainable Agriculture"
          />

          <div className="p-8 flex flex-col flex-1">
            <h3 className="text-2xl font-['Archivo_Black'] text-black text-left">
              Promoting Sustainable Agriculture
            </h3>

            <p className="text-black text-left mt-4 text-sm leading-6">
              Our efforts are focused on improving the overall
              fruit availability, increasing farming efficiency,
              and building food processing capacity in the
              country, thereby helping farmers increase their
              income.
            </p>

            <button className="mt-auto self-start pt-8 border-b-2 border-black text-black font-semibold hover:text-gray-600">
              Learn more &rarr;
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Sus;
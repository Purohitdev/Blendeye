export default function Banner() {
    return (
      <section className="bg-[#E9FF94] rounded-[2rem] text-center px-6 py-12 md:py-16 max-w-5xl mx-auto my-20">
        <h2 className="text-2xl md:text-4xl font-medium leading-snug">
          If you’re a marketing agency owner, reach out to us, <br />
          as we have a limited special offer for you!
        </h2>
        <p className="mt-4 text-gray-700 text-sm md:text-base italic">(you’re gonna like it)</p>
        <button className="mt-8 px-8 py-3 bg-black text-white text-base font-semibold rounded-full hover:scale-105 transition-transform">
          Reach out
        </button>
      </section>
    );
  }
  
export default function ReservationButton() {
  return (
    <section className="relative py-16 bg-slate-900 ">
      <div className="mx-auto px-6">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 opacity-40"
          style={{ backgroundImage: "url('/book.jpg')" }}
        />

        <div className="py-10 font-serif text-right px-30 text-white">
          <h1 className="text-5xl mb-auto font-bold">About the rooms</h1>
          <p className="text-2xl">
            Choose from three room types to suit your accommodation style.
            <br></br>Enjoy the best hotel experience with the plan that&apos;s
            right for you.
          </p>
        </div>
        <a
          href="#_"
          className="relative px-6 py-3 font-bold text-white rounded-lg group left-10"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-gray-700 ease opacity-60 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-gray-800 ease opacity-50 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
          <span className="relative">Book a room</span>
        </a>
        {/* <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center"></div> */}
      </div>
    </section>
  );
}

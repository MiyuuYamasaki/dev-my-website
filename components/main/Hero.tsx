import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Miyu</h1>
        <h2 className="text-2xl text-gray-600 mb-8">Newbie Programmer</h2>
        <Link
          href="#projects"
          className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
}

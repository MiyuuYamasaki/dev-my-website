import Image from 'next/image';
import Link from 'next/link';

export default function WelcomeScreen() {
  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-1 py-2">
        <div className="flex items-center justify-start">
          <Link href="/">
            <Image
              src="/hotel_logo.png"
              alt="Hotel Logo"
              width={150}
              height={50}
              className="w-auto h-auto" // 画像サイズ調整
              style={{ width: '7vw', height: 'auto' }}
            />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4 text-xs sm:text-sm md:text-base lg:text-lg font-serif font-bold text-white">
            <li>
              <Link href="/" className="hover:text-orange-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/rooms" className="hover:text-orange-400">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/amenities" className="hover:text-orange-400">
                Amenities
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

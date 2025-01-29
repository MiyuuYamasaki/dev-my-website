'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu'; // HamburgerMenu をインポート

const Header = () => {
  const pathname = usePathname();
  const lastSegment: string = pathname.split('/').pop() || ''; // スラッシュで分割し、最後の部分を取得

  const menu: { [key: string]: string } = {
    blog: 'My Blog',
    admin: 'Admin',
    about: 'About',
    contact: 'Contact',
    dashboard: 'Dashboard',
  };

  return (
    <header className="bg-primary-light text-secondary-dark py-6 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-3xl font-bold text-primary-dark hover:text-accent transition-colors duration-300"
        >
          {menu[lastSegment]}
        </Link>
        {/* ハンバーガーメニューの呼び出し */}
        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;

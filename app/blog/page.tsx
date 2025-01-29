'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WelcomeScreen from '@/components/blog/WelcomeScreen';
import Header from '@/components/blog/Header';
import SearchBar from '@/components/blog/SearchBar';
import type { BlogPost } from './types';
// import '@/styles/hamburgers.scss';

// This would typically come from a database or API
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'My First Blog Post',
    date: '2024-12-15',
    content:
      "This is the full content of my first blog post. It's been an exciting journey starting this blog, and I can't wait to share more of my thoughts and experiences with you all.",
    imageUrl: '/soccer.jpg?height=auto&width=800',
  },
  {
    id: '2',
    title: 'Learning Next.js',
    date: '2024-12-28',
    content:
      "Next.js has been an amazing framework to learn. Its file-based routing system, server-side rendering capabilities, and built-in optimizations have made building this blog a breeze. In this post, I'll dive deeper into some of the key features that have impressed me the most.",
    imageUrl: '/coffee.jpg?height=auto&width=800',
  },
  {
    id: '3',
    title: 'Afternoontea',
    date: '2025-01-18',
    content:
      "This is the full content of my first blog post. It's been an exciting journey starting this blog, and I can't wait to share more of my thoughts and experiences with you all.",
    imageUrl: '/afternoon.jpg?height=auto&width=800',
  },
  {
    id: '4',
    title: 'Beach',
    date: '2025-01-15',
    content:
      "Next.js has been an amazing framework to learn. Its file-based routing system, server-side rendering capabilities, and built-in optimizations have made building this blog a breeze. In this post, I'll dive deeper into some of the key features that have impressed me the most.",
    imageUrl: '/walking.jpg?height=auto&width=800',
  },
  // Add more blog posts here
];

export default function Home() {
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const searchParams = useSearchParams();
  const params = usePathname();

  // 遷移元がない、もしくは遷移元がblogより上であればWelcomeScreenを表示
  let showWelcome = true;
  if (searchParams.get('showWelcome'))
    showWelcome = searchParams.get('showWelcome') === 'true';

  const [showWelcomeScreen, setShowWelcomeScreen] = useState(showWelcome);

  useEffect(() => {
    if (showWelcome) {
      // ユーザーが直接アクセスした場合（クエリなし）、WelcomeScreenは表示されない
      setShowWelcomeScreen(true);
    }
  }, [showWelcome]);

  useEffect(() => {
    if (params.endsWith('true')) {
      // WelcomeScreenが表示中はスクロールを無効化
      document.body.style.overflow = 'hidden';
    } else {
      // WelcomeScreenが消えた後にスクロールを有効化
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, []);

  const handleGetStartedClick = () => {
    setShowWelcomeScreen(false);
    localStorage.setItem('hasVisited', 'true'); // 訪問フラグをローカルストレージに保存
  };

  const handleSearch = (date: string) => {
    const filtered = blogPosts.filter((post) => post.date >= date);
    setFilteredPosts(filtered);
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* WelcomeScreenが表示されている場合のみ表示 */}
      {showWelcomeScreen && (
        <WelcomeScreen onGetStarted={handleGetStartedClick} />
      )}

      {/* アニメーション後にHeaderを表示 */}
      {!showWelcomeScreen && (
        <div className="min-h-screen bg-secondary-light">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-primary-dark">
              Welcome to My Blog
            </h1>
            <SearchBar onSearch={handleSearch} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {filteredPosts.map((post) => (
                <Link
                  href={`/blog/post/${post.id}`}
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={post.imageUrl || '/placeholder.svg'}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                    priority={post.id === '1'} // idが'1'の場合のみ優先的にロード
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-primary-dark">
                      {post.title}
                    </h2>
                    <p className="text-primary mb-2">{post.date}</p>
                    <p className="text-primary-light">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </main>
          <footer className="bg-primary text-secondary-light text-center py-4 mt-8">
            © 2025 My Personal Blog. All rights reserved.
          </footer>
        </div>
      )}
    </main>
  );
}

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/blog/Header';

export default function AdminDashboard() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-secondary-light">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-primary-dark">
          Admin Dashboard
        </h1>
        <p className="text-primary mb-4">
          Welcome to the admin dashboard. Here you can manage your blog posts
          and settings.
        </p>
        <button
          onClick={handleLogout}
          className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent-light transition-colors duration-300"
        >
          Log Out
        </button>
      </main>
    </div>
  );
}

'use client';

import { useState } from 'react';

interface SearchBarProps {
  onSearch: (date: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(date);
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="bg-white text-primary-dark px-4 py-2 rounded-lg border border-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        className="bg-primary-dark text-white px-6 py-2 rounded-lg hover:bg-accent-light transition-colors duration-200 shadow"
      >
        Search
      </button>
    </form>
  );
}

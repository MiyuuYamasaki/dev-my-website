import { notFound } from 'next/navigation';
import Link from 'next/link';

// This would typically come from a database or API
const projects = [
  {
    id: '1',
    title: 'E-commerce Site',
    description:
      'A full-stack e-commerce application built with Next.js and Stripe.',
    longDescription: 'This project is a comprehensive e-commerce solution...',
  },
  {
    id: '2',
    title: 'Task Manager',
    description:
      'A React-based task management app with drag-and-drop functionality.',
    longDescription: 'The Task Manager is a productivity tool designed to...',
  },
  {
    id: '3',
    title: 'Weather App',
    description: 'A weather forecast application using OpenWeatherMap API.',
    longDescription: 'This weather application provides real-time forecasts...',
  },
];

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="text-gray-600 mb-8">{project.longDescription}</p>
        <Link
          href="/"
          className="text-blue-500 hover:text-blue-600 transition duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

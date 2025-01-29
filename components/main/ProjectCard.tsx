import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
}

export default function ProjectCard({
  id,
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={`/projects/${id}`}
          className="text-blue-500 hover:text-blue-600 transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

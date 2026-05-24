import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="pt-24 min-h-screen flex flex-col items-center justify-center container mx-auto px-6">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-textGray mb-8 text-center max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-primary text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;

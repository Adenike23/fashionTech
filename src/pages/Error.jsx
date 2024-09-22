import { Link } from "react-router-dom";

export default function Error() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-stone-400">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            Oops! Page not found.
          </h2>
          <p className="text-gray-600 mt-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
  
          <Link to="/" className="mt-6 inline-block px-5 py-3 bg-stone-400 text-white font-semibold rounded-md shadow hover:bg-stone-500 transition">
            Go back to Homepage
          </Link>
        </div>
      </div>
    )
}
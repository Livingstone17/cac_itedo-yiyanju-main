import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle pt-16">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-church-text">404</h1>
        <p className="text-xl text-church-text-light mb-4">Oops! Page not found</p>
        <a href="/" className="text-church-gold hover:text-church-gold/80 underline font-semibold">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

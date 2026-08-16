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
    <div className="bg-gradient-subtle flex min-h-[max(600px,30vh)] items-center justify-center pt-16">
      <div className="text-center">
        <h1 className="text-church-text mb-4 text-6xl font-bold">404</h1>
        <p className="text-church-text-light mb-4 text-xl">Oops! Page not found</p>
        <a href="/" className="text-church-gold hover:text-church-gold/80 font-semibold underline">
          Return to Home
        </a>
      </div>
    </div>
  )
};

export default NotFound;

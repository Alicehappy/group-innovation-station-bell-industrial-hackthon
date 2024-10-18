import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.scss';

const Page404 = () => {
  return (
    <div className="page404">
      <h1>Oops! Page Not Found</h1>
      <Link to="/" className="page404__link">Go Back to Home</Link>
    </div>
  );
};

export default Page404;

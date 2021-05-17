import React from 'react';
import error from '../../resources/img/error404.png'

const ErrorPage = () =>
  <div className="error-page">
    <h3>404 page not found</h3>
    <p>We are sorry but the page you are looking for does not exist.</p>
    <img src={error} alt="Error Page" />
  </div>

export default ErrorPage
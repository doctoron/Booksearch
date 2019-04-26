import React from 'react';
import { Link } from 'react-router-dom'

const About = () => (
    <div>
        <h1>About Page</h1>
        <Link className="link" to="/">Go back to the home page</Link>
    </div>
);

export default About;

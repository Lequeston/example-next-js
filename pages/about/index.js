import React from 'react';
import Router from 'next/router';
import MainLayout from '../../components/MainLayout';

const About = () => {
  const handleClickLink = () => {
    Router.push('/');
  }
  return (
    <MainLayout>
      <h1>About Page</h1>

      <button onClick={handleClickLink}>Go back to home</button>
    </MainLayout>
  )
}

export default About;
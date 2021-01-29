import React from 'react';
import Router from 'next/router';
import MainLayout from '../../components/MainLayout';

const About = ({ title }) => {
  const handleClickLink = () => {
    Router.push('/');
  }
  return (
    <MainLayout>
      <h1>{title}</h1>

      <button onClick={handleClickLink}>Go back to home</button>
    </MainLayout>
  )
}

About.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/about');
  const data = await response.json();

  return {
    title: data.title
  }
}
export default About;
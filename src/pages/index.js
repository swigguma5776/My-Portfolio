import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Alex Swiggum | Full Stack Software Engineer'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'A portfolio of some of my designed and engineered applications'} />
      </Helmet>
      <App />
    </>
  );
};

import React, { Suspense, lazy } from 'react';
import Loader from '../components/Progressbar';


const Header = lazy(() => import('../components/Header'));
const Routes = lazy(() => import('../routes/Routes'));
const Footer = lazy(() => import('../components/Footer/index'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;

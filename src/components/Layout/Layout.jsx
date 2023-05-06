import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Header } from 'components/Header/Header';

import Loader from '../Loader/Loader';
import HomePage from 'components/pages/Home';

const Layout = () => {
  return (
    <>

        <HomePage />
        <Suspense fallback={<Loader />}>
          <main>
            <Outlet />
          </main>
        </Suspense>
    </>
  );
};

export default Layout;

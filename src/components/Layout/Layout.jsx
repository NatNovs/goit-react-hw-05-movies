import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom'; 
import { Header, Navigation, PageLink } from './Layout.styled'; 
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <PageLink to="/">Home</PageLink>
          <PageLink to="/movies">Movies</PageLink>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;


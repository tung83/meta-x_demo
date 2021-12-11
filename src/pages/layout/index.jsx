import { useEffect, Suspense } from 'react';
import HeaderComponent from './header';
import SuspendFallbackLoading from './suspendFallbackLoading';
import { Outlet, useLocation, useNavigate } from 'react-router';
import NavBar from './navBar';

const LayoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dashboard');
    }
  }, [navigate, location]);

  return (
    <>
      <HeaderComponent />
      <NavBar drawerWidth={150}></NavBar>
      <main className="layout-page-content">
        <Suspense
          fallback={
            <SuspendFallbackLoading
              message="Alert message title"
              description="Further details about the context of this alert."
            />
          }>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default LayoutPage;

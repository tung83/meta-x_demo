import { useEffect, Suspense } from 'react';
import SuspendFallbackLoading from './suspendFallbackLoading';
import { Outlet, useLocation, useNavigate } from 'react-router';
import NavBar from './navBar';
import MobileNavBar from './mobileNavBar';
import AppBar from '@mui/material/AppBar';

const drawerWidth = 150;
const LayoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/dashboard');
    }
  }, [navigate, location]);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` }
      }}>
      <NavBar drawerWidth={drawerWidth}></NavBar>
      <MobileNavBar />
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
    </AppBar>
  );
};

export default LayoutPage;

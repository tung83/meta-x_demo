import { useEffect, Suspense } from 'react';
import SuspendFallbackLoading from './suspendFallbackLoading';
import { Outlet, useLocation, useNavigate } from 'react-router';
import SideBar from './sideBar';
import MobileNavBar from './mobileNavBar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

const drawerWidth = 150;
const LayoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [navigate, location]);
  return (
    <Box
      sx={{
        minHeight: '100vh'
      }}>
      <AppBar>
        <SideBar drawerWidth={drawerWidth}></SideBar>
        <MobileNavBar />
      </AppBar>
      <Box
        className="layout-page-content"
        component="main"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          minHeight: '100vh',
          flexGrow: 1,
          padding: { xs: '0 24px', sm: '10px 0 10px 0' },
          ml: { sm: `${drawerWidth}px` }
        }}>
        <Suspense
          fallback={
            <SuspendFallbackLoading
              message="Alert message title"
              description="Further details about the context of this alert."
            />
          }>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};

export default LayoutPage;

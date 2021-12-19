import { useEffect, Suspense } from 'react';
import SuspendFallbackLoading from './suspendFallbackLoading';
import { Outlet, useLocation, useNavigate } from 'react-router';
import SideBar from './sideBar';
import MobileNavBar from './mobileNavBar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { drawerWidth, headerTopHeight } from '../styles/const';
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
        minHeight: { sm: '100vh' }
      }}>
      <AppBar sx={{ boxShadow: 'none' }}>
        <SideBar drawerWidth={drawerWidth}></SideBar>
        <MobileNavBar />
      </AppBar>
      <Box
        className="layout-page-content"
        component="main"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          marginTop: { xs: `${headerTopHeight}px`, sm: 0 },
          minHeight: { sm: '100vh' },
          flexGrow: 1,
          padding: { xs: '0 20px', sm: '0' },
          ml: { sm: `${drawerWidth}px` }
        }}>
        <Suspense fallback={<SuspendFallbackLoading />}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};

export default LayoutPage;

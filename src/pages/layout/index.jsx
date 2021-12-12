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
      navigate('/dashboard');
    }
  }, [navigate, location]);
  return (
    <Box
      sx={{
        backgroundColor: 'grey.dark',
        minHeight: '100vh'
      }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: 'grey.dark'
        }}>
        <SideBar drawerWidth={drawerWidth}></SideBar>
        <MobileNavBar />
      </AppBar>
      <Box
        className="layout-page-content"
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
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

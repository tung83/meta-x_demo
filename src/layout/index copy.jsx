// import { useEffect, Suspense } from 'react';
// import AppBar from '@material-ui/core/AppBar';
// import HeaderComponent from './header';
// import SuspendFallbackLoading from './suspendFallbackLoading';
// import { Outlet, useLocation, useNavigate } from 'react-router';

// const LayoutPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (location.pathname === '/') {
//       navigate('/dashboard');
//     }
//   }, [navigate, location]);

//   return (
//     <>
//       <AppBar
//         position="absolute"
//         className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
//         <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
//           <IconButton
//             color="inherit"
//             aria-label="Open drawer"
//             onClick={this.handleDrawerOpen}
//             className={classNames(classes.menuButton, this.state.open && classes.menuButtonHidden)}>
//             <MenuIcon />
//           </IconButton>
//           <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
//             Dashboard
//           </Typography>
//           <IconButton color="inherit">
//             <Badge badgeContent={4} color="secondary">
//               <NotificationsIcon />
//             </Badge>
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <main className={classes.content}>
//         <div className={classes.appBarSpacer} />
//         <Typography variant="h4" gutterBottom component="h2">
//           Orders
//         </Typography>
//         <Typography component="div" className={classes.chartContainer}>
//           <SimpleLineChart />
//         </Typography>
//         <Typography variant="h4" gutterBottom component="h2">
//           Products
//         </Typography>
//         <div className={classes.tableContainer}>
//           <SimpleTable />
//         </div>
//       </main>
//     </>
//   );
// };

// export default LayoutPage;

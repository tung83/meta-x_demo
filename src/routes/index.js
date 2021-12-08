import { lazy } from 'react';
import LayoutPage from '../pages/layout';
import WrapperRouteComponent from './config';
import { useRoutes } from 'react-router-dom';

const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '../pages/404'));
const Guide = lazy(() => import(/* webpackChunkName: "guide'"*/ '../pages/guide'));
const Output = lazy(() => import(/* webpackChunkName: "guide'"*/ '../pages/output'));

const routeList = [
  {
    path: '/',
    element: <WrapperRouteComponent element={<LayoutPage />} titleId="" />,
    children: [
      {
        path: 'dashboard',
        element: <WrapperRouteComponent element={<Guide />} titleId="title.guide" />
      },
      {
        path: 'output',
        element: <WrapperRouteComponent element={<Output />} titleId="title.output" />
      },
      {
        path: '*',
        element: <WrapperRouteComponent element={<NotFound />} titleId="title.notFount" />
      }
    ]
  }
];

const RenderRouter = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;

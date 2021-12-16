import { lazy } from 'react';
import LayoutPage from '../layout';
import WrapperRouteComponent from './config';
import { useRoutes } from 'react-router-dom';

const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '../pages/404'));
const Home = lazy(() => import(/* webpackChunkName: "home'"*/ '../pages/home'));
const Tags = lazy(() => import(/* webpackChunkName: "output'"*/ '../pages/tags'));
const Result = lazy(() => import(/* webpackChunkName: "result'"*/ '../pages/result/index'));

const routeList = [
  {
    path: '/',
    element: <WrapperRouteComponent element={<LayoutPage />} titleId="" />,
    children: [
      {
        path: 'home',
        element: <WrapperRouteComponent element={<Home />} titleId="title.home" />
      },
      {
        path: 'tags',
        element: <WrapperRouteComponent element={<Tags />} titleId="title.tags" />
      },
      {
        path: 'result/:keyword/:pageSize',
        element: <WrapperRouteComponent element={<Result />} titleId="title.result" />
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

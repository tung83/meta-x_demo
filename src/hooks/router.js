import { useLocation } from 'react-router';
export const activeRoute = () => {
  const location = useLocation();
  const isActiveMenu = (item) =>
    item.linkGroup.some((x) => {
      return location.pathname.startsWith(x);
    });
  return { isActiveMenu };
};

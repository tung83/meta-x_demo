import { useLocation } from 'react-router';
/**
 * Check if current route url is the same group of input item link
 */
export const activeRoute = () => {
  const location = useLocation();
  const isActiveMenu = (item) =>
    item.linkGroup.some((x) => {
      return location.pathname.startsWith(x);
    });
  return { isActiveMenu };
};

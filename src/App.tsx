import { RouterProvider } from 'react-router-dom';
import { Router } from './components/Router';

export const App = () => {
  return (
    <RouterProvider router={Router} />
  );
}

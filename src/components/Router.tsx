import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from './Dashboard'
import { NoMatch } from './NoMatch';

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <NoMatch />
  },
]);
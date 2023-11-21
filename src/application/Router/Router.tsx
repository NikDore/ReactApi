import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CardsPage } from '../../pages/CardsPage/CardsPage';

const router = createBrowserRouter([
    {
        path: '/',

        children: [
            {
                index: true,
                element: <CardsPage />,
            },
        ],
    },
]);

export const Router = () => <RouterProvider router={router} />;

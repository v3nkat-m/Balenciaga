import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from 'react-router-dom';

import Bags from './pages/Bags';
import Women from './pages/Women';
import Men from './pages/Men';
import Sandals from './pages/Sandals';
import ProductPage from './components/ProductPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},

	{
		path: '/product/:productId',
		element: <ProductPage />,
	},
	{
		path: '/bags',
		element: <Bags />,
	},
	{
		path: '/women',
		element: <Women />,
	},
	{
		path: '/men',
		element: <Men />,
	},
	{
		path: '/sandals',
		element: <Sandals />,
	},
	{
		path: '*',
		element: <Navigate replace to="/" />,
	},
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

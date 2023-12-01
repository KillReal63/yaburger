import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Main from '../Main/Main';
import Modal from '../Modal/Modal';
import {
  ForgotPasswordPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  UserPage,
  FeedPage,
  IngredientPage,
  OrdersHistoryPage,
  FeedElementPage,
  OrderElementPage,
} from '../../Pages/index';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import {
  defaultPath,
  feedPath,
  forgotPasswordPath,
  loginPath,
  ordersPath,
  profilePath,
  registerPath,
  resetPasswordPath,
} from '../../Shared/path';
import OrderElement from '../OrderElement/OrderElement';
import styles from '../App/App.module.css';

const Router = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const background = state && state.background;

  const onClose = () => navigate(-1);

  const routes = [
    {
      name: 'main',
      path: `${defaultPath}`,
      element: (
        <div className={styles.app}>
          <Main />
        </div>
      ),
    },
    {
      name: 'ingredients',
      path: `/ingredients/:id`,
      element: <IngredientPage />,
    },
    { name: 'feed-element', path: `/feed/:id`, element: <FeedElementPage /> },
    {
      name: 'order-element',
      path: '/profile/orders/:id',
      element: <OrderElementPage />,
    },
    {
      name: 'login',
      path: `${loginPath}`,
      element: <ProtectedRouteElement element={<LoginPage />} />,
    },
    {
      name: 'register',
      path: `${registerPath}`,
      element: <ProtectedRouteElement element={<RegisterPage />} />,
    },
    {
      name: 'forgot-password',
      path: `${forgotPasswordPath}`,
      element: <ProtectedRouteElement element={<ForgotPasswordPage />} />,
    },
    {
      name: 'reset-password',
      path: `${resetPasswordPath}`,
      element: <ProtectedRouteElement element={<ResetPasswordPage />} />,
    },
    {
      name: 'profile',
      path: `${profilePath}`,
      element: <ProtectedRouteElement element={<UserPage />} auth />,
    },
    { name: 'feed', path: `${feedPath}`, element: <FeedPage /> },
    {
      name: 'order-hitstory',
      path: `${ordersPath}`,
      element: <ProtectedRouteElement element={<OrdersHistoryPage />} auth />,
    },
  ];

  const modalRoutes = [
    {
      name: 'ingredients-modal',
      path: `/ingredients/:id`,
      element: (
        <Modal onClose={onClose} title='Детали ингредиента' open>
          <IngredientDetails />
        </Modal>
      ),
    },
    {
      name: 'feed-modal',
      path: `/feed/:id`,
      element: (
        <Modal onClose={onClose} open>
          <OrderElement />
        </Modal>
      ),
    },
    {
      name: 'order-modal',
      path: `/profile/orders/:id`,
      element: (
        <Modal onClose={onClose} open>
          <OrderElement />
        </Modal>
      ),
    },
  ];

  const routesComponents = routes.map(({ name, path, element }) => (
    <Route key={name} path={path} element={element} />
  ));

  const modalRoutesComponents = modalRoutes.map(({ name, path, element }) => (
    <Route key={name} path={path} element={element} />
  ));

  return (
    <>
      <Routes location={background || location}>{routesComponents}</Routes>
      {background && <Routes>{modalRoutesComponents}</Routes>}
    </>
  );
};

export default Router;

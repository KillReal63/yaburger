import React from 'react';
import { useSelector } from 'react-redux';
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
import { Store } from '../../Shared/Types/Store';
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

const getId = (store: Store) => store.currentIngredient.ingredient;
const getOrder = (store: Store) => store.feed.orders;
const getHistory = (store: Store) => store.history.data;

const Router = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const background = state && state.background;

  const { _id } = useSelector(getId);

  const order = useSelector(getOrder);
  const history = useSelector(getHistory);

  const orderId = order
    .map((item: any) => item._id)
    //@ts-ignore
    .find(({ _id }) => order.includes(_id));

  const onClose = () => navigate(-1);

  return (
    <>
      <Routes location={background || location}>
        <Route
          path={defaultPath}
          element={
            <div className={styles.app}>
              <Main />
            </div>
          }
        />
        <Route path={`/ingredients/:${_id}`} element={<IngredientPage />} />
        <Route path={`/feed/:${orderId}`} element={<FeedElementPage />} />
        <Route
          path={`/profile/orders/:${orderId}`}
          element={
            <ProtectedRouteElement element={<OrderElementPage />} auth />
          }
        />
        <Route
          path={loginPath}
          element={<ProtectedRouteElement element={<LoginPage />} />}
        />
        <Route
          path={registerPath}
          element={<ProtectedRouteElement element={<RegisterPage />} />}
        />
        <Route
          path={forgotPasswordPath}
          element={<ProtectedRouteElement element={<ForgotPasswordPage />} />}
        />
        <Route
          path={resetPasswordPath}
          element={<ProtectedRouteElement element={<ResetPasswordPage />} />}
        />
        <Route
          path={profilePath}
          element={<ProtectedRouteElement element={<UserPage />} auth />}
        />
        <Route path={feedPath} element={<FeedPage />} />
        <Route
          path={ordersPath}
          element={
            <ProtectedRouteElement element={<OrdersHistoryPage />} auth />
          }
        />
      </Routes>
      {background && (
        <Routes>
          <Route
            path={`/ingredients/:id`}
            element={
              <Modal onClose={onClose} title='Детали ингредиента' open>
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path={`/feed/:id`}
            element={
              <Modal onClose={onClose} open>
                <OrderElement data={order} />
              </Modal>
            }
          />
          <Route
            path={`/profile/orders/:id`}
            element={
              <Modal onClose={onClose} open>
                <OrderElement data={history} />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};

export default Router;

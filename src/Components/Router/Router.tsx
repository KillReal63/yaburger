import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
} from '../../Pages/index';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { getCookie } from '../../Helpers';
import { authUser } from '../../Api/userApi';
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
import styles from '../App/App.module.css';
import { FeedElementPage } from '../../Pages/FeedElementPage';
import { OrderElementPage } from '../../Pages/OrderElementPage';

const getId = (store: Store) => store.currentIngredient.ingredient;

const Router = () => {
  const token = getCookie('accessToken');

  const dispatch: any = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const background = state && state.background;

  const { _id } = useSelector(getId);

  useEffect(() => {
    if (!token === undefined) {
      dispatch(authUser({ token }));
    }
  }, [dispatch]);

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
        <Route path={`/feed/:id`} element={<FeedElementPage />} />
        <Route path={`/profile/orders/:id`} element={<OrderElementPage />} />
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
        <Route
          path={feedPath}
          element={<ProtectedRouteElement element={<FeedPage />} auth />}
        />
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
              <Modal onClose={onClose} title='Детали ингредиента'>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};

export default Router;
// {
//   /* <Route
//         path={`/orders/:id`}
//         element={
//           <Modal onClose={onClose}>
//             <OrderDetails />
//           </Modal>
//         }
//       /> */
// }

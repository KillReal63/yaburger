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
  OrderPage,
  IngredientPage,
} from '../../Pages/index';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { getCookie } from '../../Services/utils';
import { authUser } from '../../Services/Slices/user';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
import styles from '../App/App.module.css';

const Router = () => {
  const token = getCookie('accessToken');

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const background = state && state.background;

  const { _id } = useSelector((store) => store.currentIngredient.ingredient);

  useEffect(() => {
    if (!token === undefined) {
      dispatch(authUser(token));
    }
  }, [dispatch]);

  const onClose = () => navigate(-1);
  return (
    <>
      <Routes location={background || location}>
        <Route
          path='/'
          element={
            <div className={styles.app}>
              <Main />
            </div>
          }
        />
        <Route path={`/ingredients/:${_id}`} element={<IngredientPage />} />
        <Route
          path='/login'
          element={<ProtectedRouteElement element={<LoginPage />} />}
        />
        <Route
          path='/register'
          element={<ProtectedRouteElement element={<RegisterPage />} />}
        />
        <Route
          path='/forgot-password'
          element={
            <ProtectedRouteElement element={<ForgotPasswordPage />} reset />
          }
        />
        <Route
          path='/reset-password'
          element={<ProtectedRouteElement element={<ResetPasswordPage />} />}
        />
        <Route
          path='/profile'
          element={<ProtectedRouteElement element={<UserPage />} auth />}
        />
        <Route
          path='/order'
          element={<ProtectedRouteElement element={<OrderPage />} auth />}
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

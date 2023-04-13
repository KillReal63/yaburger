import { useReducer } from 'react';

const initialState = { isOpen: false };

const openModalReducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return { isOpen: true, ...action.payload };
    case 'close':
      return { isOpen: false };
    default:
      return { isOpen: false };
  }
};

export const useModalReducer = () => {
  const [{ isOpen, ...itemProps }, dispatch] = useReducer(
    openModalReducer,
    initialState
  );

  const openPopup = () => dispatch({ type: 'open' });

  const closePopup = () => dispatch({ type: 'close' });

  const value = { isOpen, itemProps, dispatch, closePopup, openPopup };

  return value;
};

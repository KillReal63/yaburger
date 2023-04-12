//@ts-nocheck
import { useReducer } from 'react';

type initReducerValueTypes = {
  isOpen?: boolean;
  _id?: string;
  name?: string;
  image?: string;
  type?: string;
};

const initValue: initReducerValueTypes = {
  isOpen: false,
  _id: undefined,
  name: undefined,
  image: undefined,
  type: undefined,
};

type useReducerProps = {
  openModalReducer?: () => object;
  initValue: initReducerValueTypes;
};

const openModalReducer = (
  state: {},
  action: { type: string; payload: initReducerValueTypes }
): initReducerValueTypes => {
  switch (action.type) {
    case 'open':
      return { ...action.payload, isOpen: true };
      break;
    case 'close':
      return { isOpen: false };
      break;
    default:
      return { ...initValue, isOpen: false };
  }
};

export const useModalReducer = () => {
  const [{ isOpen, ...itemProps }, dispatch] = useReducer<useReducerProps>(
    openModalReducer,
    initValue
  );

  const openPopup = () => {
    dispatch({ type: 'open' });
  };

  const closePopup = () => {
    dispatch({ type: 'close' });
  };

  const value = { isOpen, itemProps, dispatch, closePopup, openPopup };

  return value;
};

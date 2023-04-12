//@ts-nocheck
import { useEffect, useReducer } from 'react';

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
      break;
  }
};

export const useModalReducer = () => {
  // @ts-ignore
  const [{ isOpen, ...itemProps }, dispatch] = useReducer<useReducerProps>(
    openModalReducer,
    initValue
  );

  const openPopup = () => {
    const action = {
      type: 'open',
    };
    dispatch(action);
  };

  const closePopup = () => {
    const action = {
      type: 'close',
    };
    dispatch(action);
  };

  const value = { isOpen, itemProps, dispatch, closePopup, openPopup };

  return value;
};

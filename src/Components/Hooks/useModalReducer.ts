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
    case 'Esc':
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
  useEffect(() => {
    document.addEventListener('keydown', () =>
      //@ts-ignore
      dispatch({ type: 'Esc' })
    );
    return () =>
      document.removeEventListener('keydown', () =>
        //@ts-ignore
        dispatch({ type: 'Esc' })
      );
  });

  const value = { isOpen, itemProps, dispatch };

  return value;
};

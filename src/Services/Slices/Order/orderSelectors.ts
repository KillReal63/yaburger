import { RootState } from '../../../Shared/Types/Store';

export const getOrderNumber = (store: RootState) => store.order.orderNumber;
export const getIsOpen = (store: RootState) => store.order.isOpen;

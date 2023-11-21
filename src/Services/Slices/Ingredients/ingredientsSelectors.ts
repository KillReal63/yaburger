import { RootState } from '../../../Shared/Types/Store';

export const getData = (store: RootState) => store.ingredients.data;
export const getLoading = (store: RootState) => store.ingredients.loading;

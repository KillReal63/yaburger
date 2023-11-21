import { RootState } from '../../../Shared/Types/Store';

export const getMessage = (store: RootState) => store.ws.message;

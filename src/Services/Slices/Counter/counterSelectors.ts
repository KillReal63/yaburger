import { RootState } from '../../../Shared/Types/Store';

export const getIds = (state: RootState) => state.counter.ids;

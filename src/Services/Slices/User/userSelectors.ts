import { RootState } from "../../../Shared/Types/Store";

export const getIsAuth = (store: RootState) => store.user.isAuth;
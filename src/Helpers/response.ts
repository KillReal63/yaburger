//find state & actions typing

export const setLoading = (state: any) => {
  state.loading = true;
};

export const setError = (state: any, action: any) => {
  state.loading = false;
  if (state.error !== undefined) {
    action.error.message;
  }
};

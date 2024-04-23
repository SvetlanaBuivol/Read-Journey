export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.name;

export const getRefreshingUser = state => state.auth.isRefreshing;

export const getError = state => state.auth.error;

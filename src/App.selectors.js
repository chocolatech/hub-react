export const selectAppContainer = (state) => state.containers.appReducer;

export const selectApiData = (state) => selectAppContainer(state).get('apiData');

export const selectUsername = (state) => selectAppContainer(state).get('username');
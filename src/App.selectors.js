export const selectAppContainer = (state) => state.containers.appReducer;

export const selectApiData = (state) => selectAppContainer(state).get('apiData');
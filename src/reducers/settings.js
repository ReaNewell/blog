const defaultSettingsState = {
  blogTitle: "The Amazing Blog"
};

export default (state = defaultSettingsState, action) => {
  switch (action.type) {
    case 'UPDATE_SETTINGS':
      return {
        ...action.settings
      };
    case 'INITIALIZE_SETTINGS':
      return action.settings ? action.settings : defaultSettingsState;
    default: 
      return state;
  }
};
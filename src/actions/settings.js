// Actions related to blog settings.

import database from '../firebase/firebase';

export const updateSettings = (settings) => ({
  type: 'UPDATE_SETTINGS',
  settings
});
export const startUpdateSettings = (settings) => {
  return (dispatch) => {
    return database.ref(`settings`).update({
      ...settings
    }).then(() => {
      dispatch(updateSettings(settings));
    });
  };
};

export const initializeSettings = (settings) => ({
  type: 'INITIALIZE_SETTINGS',
  settings
})
export const startInitializeSettings = () => {
  return (dispatch) => {
    return database.ref(`settings`).once('value').then((snapshot) => {
      const settings = { ...snapshot.val() }
      dispatch(initializeSettings(settings))
    });
  };
};
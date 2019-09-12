import { LOG_MESSAGE } from '../constants/types';

export const logMessage = (msg, type = 'default') => dispatch => {
  const d = new Date();
  const payload = {
    timestamp: `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}:${d.getMilliseconds()}`,
    msg,
    type
  };

  dispatch({ type: LOG_MESSAGE, payload });
};

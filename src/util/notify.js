import { store } from 'react-notifications-component';

const configuration = {
  insert: 'top',
  container: 'top-right',
  animationIn: ['animated', 'bounceInRight'],
  animationOut: ['animated', 'bounceOutRight']
};

export const sendNotification = (
  message,
  type = 'default',
  duration = 4000
) => {
  store.addNotification({
    ...configuration,
    message: message,
    type,
    dismiss: {
      duration
    }
  });
};

export const sendXPResult = amount => {
  store.addNotification({
    ...configuration,
    message: `+${amount} XP`,
    type: 'default',
    dismiss: {
      duration: 2000
    }
  });
};

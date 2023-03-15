import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
// console.log('this is store', store);
// debugger;
export default function FlashCardProvider(props) {

  return <Provider store={store} {...props} />;
}

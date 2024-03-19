import type { MSWContextValues } from './types/MSWProvider.types';

export const MSWReducer = (state: MSWContextValues, action: any) => {
  switch (action.type) {
    case 'SET_ACTIVE':
      return { ...state, active: action.payload };
    default:
      return state;
  }
};

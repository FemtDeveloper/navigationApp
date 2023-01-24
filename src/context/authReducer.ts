import {AuthState} from './AuthContext';

export type AuthAction =
  | {
      type: 'signIn';
    }
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'logout'}
  | {type: 'changeUsername'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {...state, isLoggedin: true, username: 'no-username-yet'};
    case 'logout':
      return {
        ...state,
        favoriteIcon: undefined,
        isLoggedin: false,
        username: undefined,
      };
    case 'changeFavIcon':
      return {...state, favoriteIcon: action.payload};
    case 'changeUsername':
      return {...state, username: action.payload};
    default:
      return state;
  }
};

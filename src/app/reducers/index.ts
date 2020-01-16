import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import * as fromConfig from './config.reducer';

export interface ConfigState {
  season: string;
  theme: string;
}

export interface State {
  config: ConfigState,
  // drivers: Driver[],
  // teams: Team[],
  // circuits: Circuit[]
}

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const reducers: ActionReducerMap<State> = {
  config: fromConfig.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

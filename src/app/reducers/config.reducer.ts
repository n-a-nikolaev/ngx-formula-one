import { createReducer, Action, on } from '@ngrx/store';
import { ConfigState } from '.';
import { default as ConfigActions } from '../actions/config.actions';
import { DEFAULT_SEASON_YEAR, DEFAULT_THEME } from '../app.config';

const initialConfigState: ConfigState = {
  season: DEFAULT_SEASON_YEAR,
  theme: DEFAULT_THEME
}

const configReducer = createReducer(
  initialConfigState,
  on(ConfigActions.changeSeason, (state, { payload }) => ({
    ...state,
    season: payload.season
  })),
  on(ConfigActions.changeTheme, (state, { payload }) => ({
    ...state,
    season: payload.theme
  })),
);

export function reducer(state: ConfigState | undefined, action: Action) {
  return configReducer(state, action);
}

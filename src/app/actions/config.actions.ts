import { createAction, props } from '@ngrx/store';

export enum ActionTypesConfig {
  ChangeSeason = '[Config] Change Season',
  ChangeTheme = '[Config] Change Theme'
};

export const changeSeason = createAction(
  ActionTypesConfig.ChangeSeason,
  (season: string) => ({ payload: { season } })
);

export const changeTheme = createAction(
  ActionTypesConfig.ChangeTheme,
  (theme: string) => ({ payload: { theme } })
);

export default {
  changeSeason,
  changeTheme
};

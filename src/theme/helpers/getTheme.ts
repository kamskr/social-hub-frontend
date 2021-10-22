import { getProperty } from 'helpers/getProperty';
import { Theme } from 'theme/Theme.types';

export const getTheme =
  (path: keyof Theme) =>
  (props: { theme: Theme }): string =>
    getProperty(props.theme, path).toString();

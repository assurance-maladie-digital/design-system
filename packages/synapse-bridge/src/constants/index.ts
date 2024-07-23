import dayjs from 'dayjs';
import { formatDate } from '../functions/formatDate';
import { StateEnum } from './enums/StateEnum';
import { THEME_ENUM_VALUES, ThemeEnum } from './enums/ThemeEnum';

export const TODAY = formatDate(dayjs());
export { StateEnum };
export { ThemeEnum, THEME_ENUM_VALUES };

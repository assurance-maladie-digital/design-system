import dayjs from 'dayjs'
import { formatDate } from '../functions/formatDate'
import {StateEnum} from './enums/StateEnum'
import { ThemeEnum, THEME_ENUM_VALUES } from './enums/ThemeEnum'

export const TODAY = formatDate(dayjs())
export { StateEnum }
export { ThemeEnum, THEME_ENUM_VALUES }

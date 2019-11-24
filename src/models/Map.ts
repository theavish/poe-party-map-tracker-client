import { IItem } from './Item';

export interface IMap extends IItem {
    tier?: number | 'unique';
}

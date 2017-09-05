import { UniFilter } from './filter';
import { UniListItem } from './list-item';

export interface UniFilterItem extends UniListItem {
    filter: UniFilter;
};

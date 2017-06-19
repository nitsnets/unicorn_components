import { FilterPipe } from './filter.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { FormatDaterangePipe } from './format-daterange.pipe';
import { FormatPipe } from './format.pipe';
import { FormatTimePipe } from './format-time.pipe';
import { HighlightPipe } from './highlight.pipe';
import { ObjToArrayPipe } from './obj-to-array.pipe';
import { UniFillMapPipe } from './fill-map.pipe';
import { UniPaginatePipe } from './paginate.pipe';
import { UniSortPipe } from './sort.pipe';

export const UNI_PIPES = [
    FilterPipe, HighlightPipe, ObjToArrayPipe, FormatDatePipe, FormatTimePipe, FormatDaterangePipe,
    FormatPipe, UniSortPipe, UniFillMapPipe, UniPaginatePipe
];

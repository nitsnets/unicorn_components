import { FilterPipe } from './filter.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { FormatDaterangePipe } from './format-daterange.pipe';
import { FormatPipe } from './format';
import { FormatTimePipe } from './format-time.pipe';
import { HighlightPipe } from './highlight.pipe';
import { NtsFillMapPipe } from './fill-map.pipe';
import { NtsPaginatePipe } from './paginate.pipe';
import { NtsSortPipe } from './sort.pipe';
import { ObjToArrayPipe } from './obj-to-array.pipe';

export const NTS_PIPES = [
    FilterPipe, HighlightPipe, ObjToArrayPipe, FormatDatePipe, FormatTimePipe, FormatDaterangePipe,
    FormatPipe, NtsSortPipe, NtsFillMapPipe, NtsPaginatePipe
];

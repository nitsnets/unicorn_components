import { FilterPipe } from './filter.pipe';
import { HighlightPipe } from './highlight.pipe';
import { ObjToArrayPipe } from './obj-to-array.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { FormatTimePipe } from './format-time.pipe';

export const NTS_PIPES = [
  FilterPipe, HighlightPipe, ObjToArrayPipe, FormatDatePipe, FormatTimePipe
];

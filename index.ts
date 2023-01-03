import { from, bufferCount } from 'rxjs';

const users = [
  'user 1',  'user 2',   'user 3',   'user 4',   'user 5',
  'user 6',   'user 7',   'user 8',   'user 9',   'user 10',
];

const pageSize = 4;

const pagedItems = from(users)
  .pipe(bufferCount(pageSize))
  .subscribe((page) => console.log(`Page: ${page}`));

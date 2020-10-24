import { setData } from './data';
import { mInit } from './materialize';
import { searchInit } from './search';
import { genTop, statsInit } from './html';

mInit();
genTop();
setData();
searchInit();
statsInit();

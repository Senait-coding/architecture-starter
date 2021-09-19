// keep this import! you will need it
import { loadListener } from '../listeners/load.js';
// you can get rid of this one
import { hidePage } from '../listeners/hide-page.js';
import { nextPage } from '../listeners/click-next-question.js';

// keep this listener call!  you will need it
loadListener();
// you can get rid of this one
hidePage;
nextPage;

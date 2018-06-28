import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BbBlogBlogModule } from './blog/blog.module';
import { BbBlogEntryModule } from './entry/entry.module';
import { BbBlogTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        BbBlogBlogModule,
        BbBlogEntryModule,
        BbBlogTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BbBlogEntityModule {}

import Component, { mixins } from 'vue-class-component';

import { UpdateFileModel } from './updateFileModel';

const MixinsDeclaration = mixins(UpdateFileModel);

@Component
export class EventsMapping extends MixinsDeclaration {

}

import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { CamelizePipe } from 'ngx-pipes';

import { MapService } from './map.service';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAceVbYzIL8yvIXoltC1dQzg40sDVlxtuE'
    }),
    CommonModule
  ],
  providers: [
    MapService,
    CamelizePipe
  ],
})
export class MapModule { }

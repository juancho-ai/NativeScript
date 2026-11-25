import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './catalogo.component';
import { DetalleItemComponent } from './detalle-item/detalle-item.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    CatalogoRoutingModule
  ],
  declarations: [
    CatalogoComponent,
    DetalleItemComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CatalogoModule {}

import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroPorTituloPipe } from './foto.pipe';


@NgModule({
    declarations: [
        FotoComponent,
        FiltroPorTituloPipe
    ],
    exports: [ 
        FotoComponent, 
        FiltroPorTituloPipe
    ]
})
export class FotoModule {}
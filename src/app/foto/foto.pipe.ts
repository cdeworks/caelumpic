import { FotoComponent } from './foto.component';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filtroPorTitulo'
})

export class FiltroPorTituloPipe implements PipeTransform {
   
    transform(fotos: FotoComponent[], digitado: string) {
        console.log(fotos);
        console.log(digitado);
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado.toLowerCase()));
    }

}

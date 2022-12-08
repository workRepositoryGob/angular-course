import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

    heroes: string[]=['Spiderman','Ironam','Hulk','Thor'];
    heroeBorrado='';

    borrarHeroe() {
        console.log("borrando");
        this.heroeBorrado=this.heroes.pop()||'';
      
    }
}

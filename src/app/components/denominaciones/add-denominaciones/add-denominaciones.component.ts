import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute} from '@angular/router';
import { Denominaciones } from 'src/app/models/denominaciones';
import { DenominacionesService } from 'src/app/service/denominaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-denominaciones',
  templateUrl: './add-denominaciones.component.html',
  styleUrls: ['./add-denominaciones.component.css']
})
export class AddDenominacionesComponent implements OnInit {
  denominacionModel:Denominaciones = new Denominaciones();
  constructor(private denominacionesService:DenominacionesService,
    private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {}

    public create():void{       
      this.denominacionesService.addDenominaciones(this.denominacionModel).subscribe(        
        response=>{
          this.router.navigate(['/listar'])
        Swal.fire('Nuevo Denominacion', `Denominacion ${this.denominacionModel.nombre} creado con exito`,"success")      
      })
     
  }
}

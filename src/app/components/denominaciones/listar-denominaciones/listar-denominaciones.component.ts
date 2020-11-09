import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Denominaciones } from 'src/app/models/denominaciones';
import { DenominacionesService } from 'src/app/service/denominaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-denominaciones',
  templateUrl: './listar-denominaciones.component.html',
  styleUrls: ['./listar-denominaciones.component.css']
})
export class ListarDenominacionesComponent implements OnInit {

  denominaciones:Denominaciones[];
  
  constructor(private denominacionesService: DenominacionesService, private router: Router) { }
  ngOnInit(): void {
    this.listar();
  }
  delDenominaciones(num:number):void{
    
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras reverti esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.listar()
            Swal.fire(
              'Eliminado!',
              'El registro ha sido eliminado.',
              'success'
            )
          }
          this.denominacionesService.deleteDenominaciones(num).subscribe(
            response=>{
        })
      }
    )    
  }
  listar():void{
    this.denominacionesService.getDenominaciones().subscribe(
      (data)=>{
        this.denominaciones = data['CUR_TIPO_DENOMINACION'];
      }
    ) 
  }
}

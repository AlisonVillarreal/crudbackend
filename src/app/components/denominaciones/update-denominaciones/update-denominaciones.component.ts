import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Denominaciones } from 'src/app/models/denominaciones';
import { DenominacionesService } from 'src/app/service/denominaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-denominaciones',
  templateUrl: './update-denominaciones.component.html',
  styleUrls: ['./update-denominaciones.component.css']
})
export class UpdateDenominacionesComponent implements OnInit {
  denominaciones: any;  
  denominacion:Denominaciones=new Denominaciones();
  
  constructor(private denominacionesService:DenominacionesService,
    private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarDenominacion();
  }
  cargarDenominacion():void{
    this.activatedRoute.params.subscribe(params=>{
      let id = params['id']
      if(id){
        this.denominacionesService.getDenominacion(id).subscribe(
          (data)=>{
          this.denominaciones=data['CUR_TIPO_DENOMINACION'] 
          this.denominacion.idtipo_asociacion=id;
        })
      }
    })
  }
  modificarDenominacion():void{
    this.denominacionesService.updateDenominaciones(this.denominacion).subscribe(
      response=>{
        Swal.fire({
          title: 'Estas seguro?',
          text: "No podras revertir esto!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, update it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/listar'])
            Swal.fire(
              'Actualizado!',
              'El registro ha sido Modificado.',
              'success'
            )
          }
        })    
    })
  }
  }
  
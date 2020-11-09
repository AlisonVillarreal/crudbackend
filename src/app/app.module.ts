import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { ListarDenominacionesComponent } from './components/denominaciones/listar-denominaciones/listar-denominaciones.component';
import { AddDenominacionesComponent } from './components/denominaciones/add-denominaciones/add-denominaciones.component';
import { UpdateDenominacionesComponent } from './components/denominaciones/update-denominaciones/update-denominaciones.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DenominacionesService } from './service/denominaciones.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarDenominacionesComponent,
    AddDenominacionesComponent,
    UpdateDenominacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule,

  ],
  providers: [DenominacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

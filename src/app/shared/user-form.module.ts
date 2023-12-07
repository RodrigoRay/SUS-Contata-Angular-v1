import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from './usuario.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsuarioService
  ],
  bootstrap: []
})
export class UserModule { }


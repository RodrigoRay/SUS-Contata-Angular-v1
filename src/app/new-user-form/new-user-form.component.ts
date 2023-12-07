import { Component, OnInit ,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { UsuarioService } from '../shared/usuario.service';
import { UsuarioModel } from '../shared/usuario.model';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-user-form',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, FormsModule, HttpClientModule],
  providers: [UsuarioService],
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.scss']
})
export class NewUserFormComponent {
  'usuarioData': UsuarioModel;
  title = ''

  constructor(private route: ActivatedRoute, private router: Router, private usuarioService: UsuarioService) { }

  ngOninit() {
    this.title = "Novo Usuário"
    this.usuarioData = new UsuarioModel()

    const cpf = this.route.snapshot.paramMap.get("cpf")

    if (cpf) {
      this.usuarioService.getByCpf(cpf).subscribe(resp => {
        this.usuarioData = resp
        this.title = `Alterando o Cliente ${this.usuarioData.nomeCompleto}`
      })
    }
  }


  onSubmit() {
    let observable: Observable<UsuarioModel> = this.usuarioService.insert(this.usuarioData)

    if (this.usuarioData.cpf) {
      observable = this.usuarioService.update(this.usuarioData)
    } else {
      observable = this.usuarioService.insert(this.usuarioData)
    }

    observable.subscribe(() => {
      this.router.navigate(['/usuario/new'])
    })
  }
}

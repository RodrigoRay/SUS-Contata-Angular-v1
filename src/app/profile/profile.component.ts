import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/user-data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { UsuarioService } from '../shared/usuario.service';
import { UsuarioModel } from '../shared/usuario.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, HttpClientModule, FormsModule],
  providers: [UsuarioService],
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  usersData: any[] = [];

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.lerInformacoesUsuario();
  }

  lerInformacoesUsuario(): void {
    
    this.userDataService.lerDadosUsuario();

    // Subscreva-se no Observable para obter os dados
    this.userDataService.usersData$.subscribe(
      (data: any[]) => {
        // Manipule os dados conforme necessário
        this.usersData = data;
      },
      (error) => {
        console.error('Erro ao obter os dados do usuário:', error);
      }
    );
  }
}


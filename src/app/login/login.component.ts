import { Component, OnInit, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private renderer: Renderer2, private el: ElementRef) {
    this.loginForm = this.fb.group({
      optLogin: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    // Adicione o script JavaScript aqui após a visualização do componente
    this.setupScript();
  }

  setupScript() {
    this.loginForm.valueChanges.subscribe((value) => {
      const conectaButton = this.el.nativeElement.querySelector('#conecta');
      if (conectaButton) {
        this.renderer.listen(conectaButton, 'click', () => {
          if (value.optLogin === 'cidadao') {
            // Lógica para redirecionar para ../agendamentos
          } else if (value.optLogin === 'administrativo') {
            // Lógica para redirecionar para ../agendamentos-adm
          }
        });
      }
    });
  }

  ngOnInit() {
  }
}

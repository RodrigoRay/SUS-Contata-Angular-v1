import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
    selector: 'app-agendamentos-adm',
    standalone: true,
    templateUrl: './agendamentos-adm.component.html',
    styleUrl: './agendamentos-adm.component.scss',
    imports: [CommonModule, HeaderComponent, FooterComponent]
})
export class AgendamentosAdmComponent {

}

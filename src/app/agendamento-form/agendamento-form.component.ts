import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-agendamento-form',
    standalone: true,
    templateUrl: './agendamento-form.component.html',
    styleUrl: './agendamento-form.component.scss',
    imports: [CommonModule, HeaderComponent, FooterComponent, FormsModule]
})
export class AgendamentoFormComponent {

}

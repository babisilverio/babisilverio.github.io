import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent {
  nome = 'Bárbara Costa Silverio';
  cargo = 'Desenvolvedora Backend Java';
  localizacao = 'Belo Horizonte, MG';
}

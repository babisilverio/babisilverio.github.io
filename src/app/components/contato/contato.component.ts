import { Component } from '@angular/core';

interface Contato {
  tipo: string;
  valor: string;
  icone: string;
  link?: string;
}

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
  standalone: false
})
export class ContatoComponent {
  contatos: Contato[] = [
    {
      tipo: 'Email',
      valor: 'barbara.csilverio@gmail.com',
      icone: 'fas fa-envelope',
      link: 'mailto:barbara.csilverio@gmail.com'
    },
    {
      tipo: 'Telefone',
      valor: '+55 (31) 99541-9724',
      icone: 'fas fa-phone',
      link: 'tel:+5531995419724'
    },
    {
      tipo: 'LinkedIn',
      valor: 'linkedin.com/in/b%C3%A1rbara-costa-silverio-14400a124/',
      icone: 'fab fa-linkedin',
      link: 'https://https://www.linkedin.com/in/b%C3%A1rbara-costa-silverio-14400a124/'
    },
    {
      tipo: 'GitHub',
      valor: 'github.com/babisilverio',
      icone: 'fab fa-github',
      link: 'https://github.com/babisilverio'
    },
    {
      tipo: 'Localização',
      valor: 'Belo Horizonte, MG - Brasil',
      icone: 'fas fa-map-marker-alt'
    }
  ];
}

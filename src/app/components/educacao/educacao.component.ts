import { Component } from '@angular/core';

interface Educacao {
  curso: string;
  instituicao: string;
  periodo: string;
  descricao?: string;
}

@Component({
  selector: 'app-educacao',
  templateUrl: './educacao.component.html',
  styleUrls: ['./educacao.component.scss'],
  standalone: false
})
export class EducacaoComponent {
  educacao: Educacao[] = [
    {
      curso: 'Pos Graduacao em Arquitetura de Software distribuido',
      instituicao: 'PUC Minas',
      periodo: '2025 - em andamento'
    },
    {
      curso: 'Curso de extensão em Engenharia de Software Moderna',
      instituicao: 'UFMG',
      periodo: 'set/2020 - dez/2020'
    },
    {
      curso: 'Tecnologia em Sistemas para Internet',
      instituicao: 'Instituto Federal do Sudeste de Minas Gerais',
      periodo: '2011-2016'
    }
  ];
}

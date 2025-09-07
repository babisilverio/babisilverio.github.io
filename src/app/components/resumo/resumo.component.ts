import { Component } from '@angular/core';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss'],
  standalone: false
})
export class ResumoComponent {
  resumo = `💻 Desenvolvedora Backend com foco em Java, especializada na criação de microsserviços robustos, integração eficiente de APIs e arquiteturas escaláveis. Possuo sólida experiência em projetos utilizando Spring Boot, Kafka, Docker e bancos de dados SQL e NoSQL, sempre com atenção à performance e à qualidade do código. Além disso, tenho vivência em frontend com Vue.js e AngularJS, o que me permite atuar com visão full-stack e contribuir de forma estratégica em todas as etapas do desenvolvimento de soluções digitais.`;
}

import { Component } from '@angular/core';

interface Experiencia {
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
  tecnologias: string[];
}

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],
  standalone: false
})
export class ExperienciaComponent {
  experiencias: Experiencia[] = [
    {
      cargo: 'Desenvolvedora Java Mid-Level',
      empresa: 'CI&T',
      periodo: '2025 - Presente',
      descricao: `Desenvolvimento de aplicações backend robustas e escaláveis utilizando Java e Spring Boot. Implementação de microserviços, integração com mensageria Azure Service Bus e conteinerização com Docker. Colaboração em equipes ágeis para entrega contínua de software.`,
      tecnologias: ['Java', 'Spring Boot', 'Azure Service Bus', 'Docker']
    },
    {
      cargo: 'Analista de Desenvolvimento Jr',
      empresa: 'DTI Digital',
      periodo: '2023 - 2025',
      descricao: `Desenvolvimento de aplicações backend utilizando Java, Micronaut, Apache Kafka e SQL Server. Atuação com Vue.js no frontend para desenvolvimento de interfaces dinâmicas. Trabalho em equipe ágil utilizando Scrum e Kanban.`,
      tecnologias: ['Java', 'Vue.js', 'Micronaut', 'Apache Kafka', 'SQL Server']
    },
    {
      cargo: 'Desenvolvedora Trainee',
      empresa: 'Teknisa',
      periodo: '2019 - 2022',
      descricao: `Desenvolvimento full-stack com PHP (Doctrine), Vue.js e MySQL. Construção de aplicações móveis híbridas com Apache Cordova. Trabalho em equipe ágil utilizando Scrum.`,
      tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'PHP', 'MySQL', 'Apache Cordova']
    }
  ];
}

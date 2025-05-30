import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Clean Architecture Web App',
      summary: 'Modular web application using layered architecture with .NET 9 and Angular, implementing CQRS, MediatR, and domain-driven design.',
      description: 'This application is built following clean architecture principles using .NET 9 for the backend and Angular for the frontend. The structure promotes separation of concerns through Domain, Application, API, and Infrastructure layers. MediatR and CQRS enhance maintainability and scalability. Authentication, CRUD operations, and Azure App Service deployment are included.',
      projectLink: 'https://github.com/Vedant1805/Clean-Architecture-WebApp',
      tags: [Tag.DOTNET, Tag.ANGULAR, Tag.CQRS, Tag.MEDIATR, Tag.SQL, Tag.AZURE],
      pictures: ['../../assets/cleanarch_01.png', '../../assets/cleanarch_02.png']
    },
    {
      id: 2,
      name: 'Auth Management System',
      summary: 'Secure authentication system built with Angular and .NET Core featuring JWT-based login, registration, and role-based access control.',
      description: 'This system manages user authentication and authorization using JWT. Built with Angular and .NET Core, it includes login, registration, token refresh, role-based access, and protected endpoints. Backend is integrated with Identity framework, and features robust error handling, token validation, and session expiry.',
      projectLink: 'https://github.com/Vedant1805/Auth-App',
      tags: [Tag.DOTNET, Tag.ANGULAR, Tag.JWT, Tag.IDENTITY, Tag.AUTH, Tag.SQL],
      pictures: ['../../assets/authapp_01.png', '../../assets/authapp_02.png']
    },
    {
      id: 3,
      name: 'Home Rental App',
      summary: 'Full-stack rental property app using Angular and .NET Core with features like filtering, listing, and secure user access.',
      description: 'This project enables users to search and filter home rental listings. It includes a clean, responsive UI with Angular and a backend API built in .NET Core. Users can add properties, register, log in securely, and filter listings. Hosted on Render with a user-focused dashboard and profile system.',
      projectLink: 'https://github.com/Vedant1805/Home_Rental_Application',
      tags: [Tag.DOTNET, Tag.ANGULAR, Tag.JWT, Tag.SQL, Tag.RENDER],
      pictures: ['../../assets/rental_01.png', '../../assets/rental_02.png']
    }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Portfolio');
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }
}

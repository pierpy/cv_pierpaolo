import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';    

@Component({
  selector: 'app-teaching',
  imports: [MatCardModule, NgFor],
  templateUrl: './teaching.component.html',
  styleUrl: './teaching.component.scss'
})
export class TeachingComponent {
  courses = [
    { name: 'Fisica Applicata', academicYear: '2024/25', abstract: 'Fisica per le Professioni Sanitarie', syllabus: '/files/fisica1.pdf' },
    { name: 'Fisica Medica', academicYear: '2024/25', abstract: 'Fisica per le Professioni Sanitarie', syllabus: '/files/fisica1.pdf' },
  ];
}
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
    { name: 'Brain imaging-methods and applications', academicYear: '2024/25', abstract: 'LMSCC, analista di big-data nelle neuroscienze cognitive', syllabus: '/files/fisica1.pdf' },
    { name: 'Fisica', academicYear: '2024/25', abstract: 'Logopedia', syllabus: '/files/fisica1.pdf' },
    { name: 'Fisica applicata', academicYear: '2024/25', abstract: 'Igiene dentale', syllabus: '/files/fisica1.pdf' },
    { name: 'Fisica tecnica ambientale', academicYear: '2024/25', abstract: 'Tecniche della prevenzione nellambiente e nei luoghi di lavoro', syllabus: '/files/fisica1.pdf' },
    { name: 'Posturologia', academicYear: '2024/25', abstract: 'Fisioterapia', syllabus: '/files/fisica1.pdf' },
    { name: 'Valutazione posturale optoelettronica', academicYear: '2024/25', abstract: 'Fisioterapia', syllabus: '/files/fisica1.pdf' },
  ];
}
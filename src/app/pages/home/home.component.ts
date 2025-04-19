import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor],

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  publicationsCount  = 48;
  citationsCount     = 1601;
  collaborationsCount = 21;
  coursesCount       = 6;

  highlights = [
    {
      icon: '💡',
      title: 'EEG microstates and Connectivity',
      subtitle: '',
      description: ''
    },
    {
      icon: '💡',
      title: 'Machine-Learning for EEG data',
      subtitle: '',
      description: ''
    },
    {
      icon: '💡',
      title: 'EEG for diagnostic and prognostic applications',
      subtitle: '',
      description: ''
    }
  ];
}
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-bio',
  imports: [NgFor],
  templateUrl: './bio.component.html',
  styleUrl: './bio.component.scss'
})
export class BioComponent {
  timeline = [
    { label: '2024 – oggi', content: 'Ricercatore RTDB, Univerità "G.dAnnunzio" di Chieti-Pescara.' },
    { label: '2023 – 2024', content: 'Ricercatore RTDA, Univerità "G.dAnnunzio" di Chieti-Pescara.' },
    { label: '2016 – 2023', content: 'PostDoc, Univerità "G.dAnnunzio" di Chieti-Pescara.' },
    { label: '2013 – 2016', content: 'Dottorato In Neuroscienze e Imaging, Univerità "G.dAnnunzio" di Chieti-Pescara.' },
    { label: '2006 – 2009', content: 'Laurea Specialistica in Ingegneria delle Telecomunicazioni, Univerità degli studi dellAquila.' },
    { label: '2002 – 2006', content: 'Laurea Triennale in Ingegneria delle Telecomunicazioni, Univerità degli studi dellAquila.' },
  ];
}

import { NgFor, NgIf } from '@angular/common';
import { PublicationsService } from '../../services/publications.service';
import { Component, inject } from '@angular/core';
import { computed, effect, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';          // se usi ngModel

@Component({
  standalone: true,
  selector: 'app-publications',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './publications.component.html'
})
export class PublicationsComponent {
  private service = inject(PublicationsService);
  private _filter = signal('');       // stato interno
  years = computed(() => [null, ...new Set(this.pubs().map(p => p.year))].sort().reverse());
  yearFilter = signal<number|null>(null);
  search = signal('');   
  filter = signal<string>('');                       // reattivo con Signals
   /** getter+setter per ngModel */
  get filterValue() { return this._filter(); }
  set filterValue(v: string) { this._filter.set(v); }
  pubs = this.service.pubs;

  visiblePubs = computed(() =>
    this.pubs().filter(p =>
      (!this.yearFilter() || p.year === this.yearFilter()) &&
      p.title.toLowerCase().includes(this.search().toLowerCase())
    )
  );
  
  // debug: facoltativo
  constructor() {
    effect(() => console.log('Filtro cambiato:', this.filter()));
  }
}


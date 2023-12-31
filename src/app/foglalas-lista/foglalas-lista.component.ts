import { Component, OnInit } from '@angular/core';
import { FoglalasService } from '../foglalas.service';

@Component({
  selector: 'app-foglalas-lista',
  templateUrl: './foglalas-lista.component.html',
  styleUrls: ['./foglalas-lista.component.css'],
})
export class FoglalasListaComponent implements OnInit {
  foglalasok: any[] = [];
  displayedColumns: string[] = ['id', 'cim', 'datum', 'fo', 'iranyitoszam', 'nev'];

  constructor(private foglalasService: FoglalasService) { }

  ngOnInit(): void {
    this.getFoglalasok();
  }

  getFoglalasok(): void {
    this.foglalasService.getFoglalasok().subscribe({
      next: (data) => {
        console.log('Foglalások:', data);
        this.foglalasok = data;
      },
      error: (error) => {
        console.error('Hiba történt a foglalások lekérése során:', error);
      }
    });
  }
}


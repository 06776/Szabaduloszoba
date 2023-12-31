import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FoglalasService } from '../foglalas.service';

@Component({
  selector: 'app-ujfoglalas',
  templateUrl: './ujfoglalas.component.html',
  styleUrls: ['./ujfoglalas.component.css'],
})
export class UjfoglalasComponent {
  foglalas: any = {
    datum: new Date().toISOString().split('T')[0],
    fo: 2,
  };

  constructor(private foglalasService: FoglalasService, private router: Router) { }

  submitForm(): void {
    this.foglalasService.regisztralFoglalas(this.foglalas).subscribe({
      next: () => {
        console.log('Foglalás sikeresen regisztrálva!');
        this.router.navigate(['/foglalasok']);
      },
      error: (error) => {
        console.error('Hiba történt a foglalás regisztrálása során:', error);
      }
    });
  }
}

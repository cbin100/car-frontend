// src/app/app.component.ts
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarService } from './core/services/car';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {

  cars: any[] = [];
  total = 0; // total cars count for pagination

  filters: any = {
    search: '',
    make: '',
    fuel: '',
    sortBy: '',
    order: 'asc',
    page: 1,
    limit: 10
  };

  makes: string[] = ['toyota', 'ford', 'chevrolet', 'bmw', 'audi'];
  fuels: string[] = ['usa', 'japan', 'europe'];

  constructor(
    private carService: CarService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    const saved = localStorage.getItem('filters');

    if (saved) {
      this.filters = JSON.parse(saved);
    }

    this.loadCars();
  }

  loadCars() {
    this.carService.getCars(this.filters).subscribe(res => {
      this.cars = res.data || [];
      this.total = res.total || 0;

      // ensures UI updates immediately
      this.cdr.detectChanges();
    });
  }

  // total pages calculation
  get totalPages(): number {
    return Math.ceil(this.total / this.filters.limit);
  }

  onSearchChange() {
    this.filters.page = 1;
    localStorage.setItem('filters', JSON.stringify(this.filters));
    this.loadCars();
  }

  nextPage() {
    if (this.filters.page < this.totalPages) {
      this.filters.page++;
      this.loadCars();
    }
  }

  prevPage() {
    if (this.filters.page > 1) {
      this.filters.page--;
      this.loadCars();
    }
  }
}
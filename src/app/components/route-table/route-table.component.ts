import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '../../models/route.model';

@Component({
  selector: 'app-route-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './route-table.component.html',
  styleUrls: ['./route-table.component.css']
})
export class RouteTableComponent {
  @Input() routes: Route[] = [];
  sortColumn: keyof Route | null = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  highlightedRow: number | null = null;

  sort(column: keyof Route): void {
    // Анимация сброса перед сортировкой
    this.highlightedRow = null;

    setTimeout(() => {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }

      this.routes.sort((a, b) => {
        const valA = a[column];
        const valB = b[column];

        if (column === 'address' || column === 'gateway') {
          return this.sortDirection === 'asc'
            ? this.compareIps(valA, valB)
            : this.compareIps(valB, valA);
        } else {
          return this.sortDirection === 'asc'
            ? valA.localeCompare(valB)
            : valB.localeCompare(valA);
        }
      });

      // Запуск анимации после сортировки
      this.highlightedRow = 0;
    }, 10);
  }

  private compareIps(ipA: string, ipB: string): number {
    const numA = this.ipToNumber(ipA.split('/')[0]);
    const numB = this.ipToNumber(ipB.split('/')[0]);
    return numA - numB;
  }

  private ipToNumber(ip: string): number {
    return ip.split('.')
      .reduce((acc, octet, idx) => acc + parseInt(octet) * Math.pow(256, 3 - idx), 0);
  }

  getSortIcon(column: string): string {
    if (this.sortColumn !== column) return '';
    return this.sortDirection === 'asc' ? '▲' : '▼';
  }

  // Проверка для анимации строк
  shouldHighlight(index: number): boolean {
    return this.highlightedRow === Math.floor(index / 3);
  }
}

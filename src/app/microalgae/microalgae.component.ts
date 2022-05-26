import { Component, OnInit } from '@angular/core';
import { Microalgae } from '../microalgae';
import { MICROALGAE } from '../mock-microalgae';
import { Sort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-microalgae',
  templateUrl: './microalgae.component.html',
  styleUrls: ['./microalgae.component.css']
})
export class MicroalgaeComponent implements OnInit {

  myControl = new FormControl();
  options: Microalgae[] = MICROALGAE;
  filteredOptions: Observable<Microalgae[]>;

  microalgae_list = MICROALGAE;

  sortedData: Microalgae[];

  constructor(private router: Router) {
    this.sortedData = this.microalgae_list.slice();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }

  sortData(sort: Sort) {
    const data = this.microalgae_list.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      console.log(this.compare(a.id, b.id, isAsc))
      switch (sort.active) {
        case 'id':
          return this.compare(a.id, b.id, isAsc);
        case 'specie':
          return this.compare(a.specie, b.specie, isAsc);
        case 'status':
          return this.compare(a.status, b.status, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  ngOnInit(): void {
  }

  displayFn(microalgae: Microalgae): string {
    return microalgae && microalgae.specie ? microalgae.specie : '';
  }

  private _filter(specie: string): Microalgae[] {
    const filterValue = specie.toLowerCase();

    return this.options.filter(option => option.specie.toLowerCase().includes(filterValue));
  }
  
  getDetails() {
    if(this.myControl.value.id) {
      this.router.navigate(['/detail/' + this.myControl.value.id])
    }
  }
}

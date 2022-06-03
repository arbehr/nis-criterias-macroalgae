import { Component, OnInit } from '@angular/core';
import { Macroalgae } from '../macroalgae';
import { MACROALGAE } from '../mock-macroalgae';
import { Sort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-macroalgae',
  templateUrl: './macroalgae.component.html',
  styleUrls: ['./macroalgae.component.css']
})
export class MacroalgaeComponent implements OnInit {

  myControl = new FormControl();
  options: Macroalgae[] = MACROALGAE;
  filteredOptions: Observable<Macroalgae[]>;

  macroalgae_list = MACROALGAE;

  sortedData: Macroalgae[];

  constructor(private router: Router) {
    this.sortedData = this.macroalgae_list.slice();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }

  sortData(sort: Sort) {
    const data = this.macroalgae_list.slice();
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

  displayFn(macroalgae: Macroalgae): string {
    return macroalgae && macroalgae.specie ? macroalgae.specie : '';
  }

  private _filter(specie: string): Macroalgae[] {
    const filterValue = specie.toLowerCase();

    return this.options.filter(option => option.specie.toLowerCase().includes(filterValue));
  }
  
  getDetails() {
    if(this.myControl.value.id) {
      this.router.navigate(['/detail/' + this.myControl.value.id])
    }
  }
}

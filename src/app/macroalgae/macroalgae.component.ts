import { Component, OnInit } from '@angular/core';
import { Macroalgae } from '../macroalgae';
import { MACROALGAE } from '../mock-macroalgae';
import { Sort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, startWith, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MacroalgaeService } from '../services/macroalgae.service';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../shared/components/info-dialog/info-dialog.component';

@Component({
  selector: 'app-macroalgae',
  templateUrl: './macroalgae.component.html',
  styleUrls: ['./macroalgae.component.css']
})
export class MacroalgaeComponent implements OnInit {

  myControl = new FormControl();
  options: Macroalgae[] = MACROALGAE;
  filteredOptions: Observable<Macroalgae[]>;
  macroalgae_list$: Observable<Macroalgae[]>;
  displayedColumns: string[] = ['id', 'specie', 'status'];
  
  //sortedData: Observable<Macroalgae[]>;

  constructor(private router: Router, 
    private macroalgaeService: MacroalgaeService,
    public dialog: MatDialog) {
    this.macroalgae_list$ = this.macroalgaeService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar macroalgae.')
        return of([]);
      })
    );
    
    //this.sortedData = this.macroalgae_list.slice();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.options.slice())),
    );
  }

  onError(errorMsg: string) {
    const dialogRef =this.dialog.open(InfoDialogComponent, {
      data: errorMsg
    });
  }

  /*sortData(sort: Sort) {
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
  }*/

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

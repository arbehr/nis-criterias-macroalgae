import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Macroalgae } from '../macroalgae';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MacroalgaeService {

  private readonly API = 'http://localhost:8080/api/macroalgae';

  constructor(private httpClient: HttpClient) { }

  list()  {
    return this.httpClient.get<Macroalgae[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        tap(macroalgae => console.log(macroalgae))
      );
  }

  get(id: number) {
    return this.httpClient.get<Macroalgae>(this.API + '/' + id)
      .pipe(
        first(),
        tap(macroalgae => console.log(macroalgae))
      )
  }

  delete(id: number): any {
    return this.httpClient.delete(this.API + '/' + id);
  }

  save(record: Macroalgae) {
    return this.httpClient.post<Macroalgae>(this.API, record).pipe(first());
  }

  update(record: Macroalgae) {
    return this.httpClient.put<Macroalgae>(this.API, record).pipe(first());
  }
}

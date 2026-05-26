import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Idata } from '../interfaces/obs.interface';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private data$: BehaviorSubject<Idata> = new BehaviorSubject({name: 'initial'})

  constructor() {}

  getData() {
    return this.data$.asObservable();
  }

  addData(value: Idata) {
    this.data$.next(value)
  }

}

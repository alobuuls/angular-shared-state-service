import { Component } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-page-1',
  templateUrl: './page1.component.html'
})
export class Page1Component {

  name!:string;

  constructor(private _state: StateService) { }

  emit(value: string) {
    this._state.addData({name: value});
  }
}

import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-page-3',
  templateUrl: './page3.component.html'
})
export class Page3Component implements OnInit {

  nameState!:string;

  constructor(private _state: StateService) { }

  ngOnInit(): void {
    this.getState();
  }

  getState() {
    this._state.getData().subscribe(res => this.nameState = res.name);
  }

  emit(value:string) {
    this._state.addData({name: value});
  }

}

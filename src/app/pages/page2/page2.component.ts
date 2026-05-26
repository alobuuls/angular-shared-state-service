import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-page-2',
  templateUrl: './page2.component.html'
})
export class Page2Component implements OnInit {

  nameState!:string;

  constructor(private _state: StateService) { }

  ngOnInit(): void {
    this.getState();
  }

  getState() {
    this._state.getData().subscribe(res => this.nameState = res.name);
  }
}

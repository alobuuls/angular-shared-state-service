import { Routes } from "@angular/router";
import { Page1Component } from "./pages/page1/page1.component";
import { Page2Component } from "./pages/page2/page2.component";
import { Page3Component } from "./pages/page3/page3.component";

export const routes: Routes = [
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: 'page2',
    component: Page2Component
  },
  {
    path: 'page-3',
    component: Page3Component
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page1'
  },
  {
    path: '**',
    redirectTo: 'page1'
  }
]

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { HomeComponent } from './components/home/home.component';
import { FootballComponent } from './components/football/football.component';
import { Shopping2Component } from './components/shopping2/shopping2.component';
import { MenuComponent} from './components/menu/menu.component';
import { CashComponent } from './components/cash/cash.component';
import { FormComponent } from './components/contact-form/form.component';


const routes: Routes = [
  { path: 'menu', component: MenuComponent},
  { path: 'pizza', component: HomeComponent  },
  { path: 'hello', component: HelloComponent  },
  { path: 'football', component: FootballComponent },
  { path: 'shopping2', component: Shopping2Component },
  { path: 'cash', component: CashComponent},
  { path: 'form-page', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

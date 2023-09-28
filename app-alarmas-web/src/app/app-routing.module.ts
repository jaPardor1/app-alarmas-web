import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAlarmasComponent } from './menu-alarmas/menu-alarmas.component';
import { LoginComponent } from './login/login.component';
import { AddAlarmComponent } from './add-alarm/add-alarm.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'menuAlarmas', component:MenuAlarmasComponent},
  {path:'addAlarm', component:AddAlarmComponent},
  {path:'settings', component:SettingsComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

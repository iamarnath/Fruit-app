import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import{AuthGuard} from './auth.guard'
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import{LoginComponent} from './login/login.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path: "home", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

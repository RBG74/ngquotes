import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { QuotesComponent } from "./quotes/quotes.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "quotes",
    component: QuotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

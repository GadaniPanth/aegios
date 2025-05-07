import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { QualityComponent } from "./quality/quality.component";
import { SustainabilityComponent } from "./sustainability/sustainability.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about-us",
    component: AboutUsComponent,
  },
  {
    path: "quality",
    component: QualityComponent,
  },
  {
    path: "sustainability",
    component: SustainabilityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

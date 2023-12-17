import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {Interface1Component} from "./pages/interface1/interface1.component";
import {Interface2Component} from "./pages/interface2/interface2.component";
import {Interface3Component} from "./pages/interface3/interface3.component";
import {Interface4Component} from "./pages/interface4/interface4.component";
import {Interface5Component} from "./pages/interface5/interface5.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/interface1"
  },
  {
    path: "interface1",
    title: "Interfza 1",
    component: Interface1Component
  },
  {
    path: "interface2",
    title: "Interfza 2",
    component: Interface2Component
  },
  {
    path: "interface3",
    title: "Interfza 3",
    component: Interface3Component
  },
  {
    path: "interface4",
    title: "Interfza 4",
    component: Interface4Component
  },
  {
    path: "interface5",
    title: "Interfza 5",
    component: Interface5Component
  }
];

const config : ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModules{}

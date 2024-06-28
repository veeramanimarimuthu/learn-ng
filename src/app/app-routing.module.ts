import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'blog', component: BlogComponent },
  { path:'services', component: ServicesComponent },
  { path:'contact', component: ContactComponent },
  { path:'child', component: ChildComponent },
  { path:'parent', component: ParentComponent },
  { path:'databinding', component: DatabindingComponent },
  { path:'reactive-form', component: ReactiveFormComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

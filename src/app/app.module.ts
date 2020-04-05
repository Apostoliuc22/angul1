import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ProductsComponent } from './components/products/products.component';
import { TodolistComponent } from './components/todolist/todolist.component';


const appRoutes: Routes = [
  { path: '', component: CarComponent },
  { path: 'about', component: ContactsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'todolist', component: TodolistComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ContactsComponent,
    ProductsComponent,
    TodolistComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

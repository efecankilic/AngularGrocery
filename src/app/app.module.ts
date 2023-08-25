import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { TodosComponent } from './components/todos/todos.component';
import { LogoutComponent } from './components/auth/logout/logout.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, TodosComponent, LogoutComponent],
  imports: [BrowserModule, AppRoutingModule, HomeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

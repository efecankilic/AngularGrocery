import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutsComponent } from './components/abouts/abouts.component';
import { PostsComponent } from './components/posts/posts.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { TodosComponent } from './components/todos/todos.component';
import { AuthService } from './services/auth.service';
import { authGuard } from './guard/auth.guard';
import { LogoutComponent } from './components/auth/logout/logout.component';
const routeConfig: Routes = [
  { path: '', component: HomeComponent, title: 'Home page' },
  {
    path: 'grocery',
    component: GroceryListComponent,
    title: 'Home page',
  },
  {
    path: 'posts',
    component: PostsComponent,
    title: 'Home page',
  },
  {
    path: 'about/:id',
    component: AboutsComponent,
    title: 'Home page',
  },
  { path: 'todos', component: TodosComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'register', component: RegisterComponent },
];

export default routeConfig;

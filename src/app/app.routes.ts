import {Routes} from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';

const ROUTES: Routes = [
    {path: 'menu', component: MenuComponent},
    {path: 'sign-up', component: SignUpComponent },
    {path: 'user-profile', component: UserProfileComponent},
    {path: '', redirectTo: '/user-profile', pathMatch: 'full'}
];

export { ROUTES };
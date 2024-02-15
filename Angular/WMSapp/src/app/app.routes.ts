import { Routes } from '@angular/router';
import { PutUserDTOComponent } from './DTOComponents/put-user-dto/put-user-dto.component';
import { PostUserDTOComponent } from './DTOComponents/post-user-dto/post-user-dto.component';
import { PutRoleDTOComponent } from './DTOComponents/put-role-dto/put-role-dto.component';
import { PostWazaDTOComponent } from './DTOComponents/post-waza-dto/post-waza-dto.component';
import { PutWazaDTOComponent } from './DTOComponents/put-waza-dto/put-waza-dto.component';
import { PostRoleDTOComponent } from './DTOComponents/post-role-dto/post-role-dto.component';
import { PutParentDTOComponent } from './DTOComponents/put-parent-dto/put-parent-dto.component';
import { PostParentDTOComponent } from './DTOComponents/post-parent-dto/post-parent-dto.component';

export const routes: Routes = [
    {path: 'getUsers', component:PutUserDTOComponent},
    {path: 'user', component:PostUserDTOComponent},
    {path: 'getRoles', component:PutRoleDTOComponent},
    {path: 'role', component:PostRoleDTOComponent},
    {path: 'getParents', component:PutParentDTOComponent},
    {path: 'parent', component:PostParentDTOComponent},
    {path: 'getWazas', component:PutWazaDTOComponent},
    {path: 'waza', component:PostWazaDTOComponent},
];

import { Routes } from '@angular/router';
import { ManageUsersComponent } from './Views/Common/User/manage-users/manage-users.component';
import { AddUserComponent } from './Views/Common/User/add-user/add-user.component';
import { AddRoleComponent } from './Views/Common/Roles/add-role/add-role.component';
import { ManageParentsComponent } from './Views/Common/Parent/manage-parents/manage-parents.component';
import { AddParentComponent } from './Views/Common/Parent/add-parent/add-parent.component';
import { ManageWazasComponent } from './Views/Common/Waza/manage-wazas/manage-wazas.component';
import { AddWazaComponent } from './Views/Common/Waza/add-waza/add-waza.component';
import { ManageRolesComponent } from './Views/Common/Roles/manage-roles/manage-roles.component';
import { AddChildComponent } from './Views/Common/Child/add-child/add-child.component';
import { WazaAchievementsComponent } from './Views/Common/Waza/waza-achievements/waza-achievements.component';
import { StatesNDistrictsComponent } from './Views/Common/States/states-ndistricts/states-ndistricts.component';
import { WazaCategoryComponent } from './Views/Common/Waza/WazaCategory/waza-category/waza-category.component';
import { MangeChildsComponent } from './Views/Common/Child/mange-childs/mange-childs.component';

export const routes: Routes = [
    // {path: 'getUsers', component:PutUserDTOComponent},
    // {path: 'user', component:PostUserDTOComponent},
    // {path: 'getRoles', component:PutRoleDTOComponent},
    // {path: 'role', component:PostRoleDTOComponent},
    // {path: 'getParents', component:PutParentDTOComponent},
    // {path: 'parent', component:PostParentDTOComponent},
    // {path: 'getWazas', component:PutWazaDTOComponent},
    // {path: 'waza', component:PostWazaDTOComponent},
    
    {path: 'getUsers', component:ManageUsersComponent},
    {path: 'user', component:AddUserComponent},
    {path: 'getRoles', component:ManageRolesComponent},
    {path: 'role', component:AddRoleComponent},
    {path: 'getParents', component:ManageParentsComponent},
    {path: 'parent', component:AddParentComponent},
    {path: 'getWazas', component:ManageWazasComponent},
    {path: 'waza', component:AddWazaComponent},
    {path: 'child', component:AddChildComponent},
    {path: 'getChilds', component:MangeChildsComponent},
    {path: 'WazaAchievements', component:WazaAchievementsComponent},
    {path: 'States', component:StatesNDistrictsComponent},
    {path: 'WazaCategory', component:WazaCategoryComponent},
    
];

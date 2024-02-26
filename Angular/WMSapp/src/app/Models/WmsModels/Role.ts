import { CommonFields } from "./CommonFields";

export class Role extends CommonFields
{
    public roleId: string = '';
    public roleName: string = '';
    public displayName: string = '';
    public roleDescription: string = '';
    public isSuperAdmin: string = '';
    public isAdmin: string = '';
    public isParent: string = '';
    public isChild: string = '';
    public isWaza:string = '';
    public isGuest:string = '';
    public isActive:string = '';
}
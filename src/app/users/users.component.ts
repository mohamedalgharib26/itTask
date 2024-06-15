import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: any = [
    {
      User: 'name',
      Role: 'admin',
      Plan: 'admin',
      Billing: 'admin',
      Status: 'active',
    },
    {
      User: 'name',
      Role: 'admin',
      Plan: 'admin',
      Billing: 'admin',
      Status: 'admin',
    },
    {
      User: 'name',
      Role: 'admin',
      Plan: 'admin',
      Billing: 'admin',
      Status: 'active',
    },
    {
      User: 'name',
      Role: 'admin',
      Plan: 'admin',
      Billing: 'admin',
      Status: 'admin',
    },
  ];
}

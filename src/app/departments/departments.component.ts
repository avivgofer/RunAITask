import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../companies/company.interface';
import { Department } from './department.interface';
import { Employee } from '../employees/employee.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RemoveDialogComponent } from './remove-dialog/remove-dialog.component';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  tableColumnsData = [{ property: 'name', displayName: 'Name' }];

  @Input() company: Company;

  constructor(private dialog: MatDialog) {}

  onRemove(department: Department | Employee) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      departmentName: (department as Department).name,
      companyName: this.company.name
    };
    this.dialog.open(RemoveDialogComponent, dialogConfig);
  }
}

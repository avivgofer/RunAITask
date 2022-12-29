import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { Employee } from 'src/app/employees/employee.interface';
import { CompaniesService } from 'src/app/companies/companies.service';
import { Company } from 'src/app/companies/company.interface';

@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.scss']
})
export class RemoveDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<RemoveDialogComponent>,
    public companiesService: CompaniesService
  ) {}

  hasRelatedEmployees: boolean;
  choosenDepartment: string;
  showIsRelatedQuestion = true;

  ngOnInit(): void {
    this.hasRelatedEmployees = !!this.getRelatedEmployees();
  }

  optionSelected(department: any) {
    this.choosenDepartment = department.value;
    this.showIsRelatedQuestion = false;
  }

  getRelatedEmployees(): Employee[] {
    let result;
    this.companiesService.$selectedCompany
      .pipe(take(1))
      .subscribe((company: Company) => {
        result = company.employees.some(
          (e: Employee) => e.departmentName === this.data.departmentName
        );
      });

    return result;
  }

  onRemove() {
    this.companiesService.removeDepartments(
      this.data.departmentName,
      this.choosenDepartment
    );

    this.dialogRef.close();
  }
}

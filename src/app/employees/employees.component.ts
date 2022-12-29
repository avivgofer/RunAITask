import { Component, OnInit, Input } from '@angular/core';
import { Company } from '../companies/company.interface';
import { Employee } from './employee.interface';
import { Department } from '../departments/department.interface';
import { CompaniesService } from '../companies/companies.service';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  tableColumnsData = [
    { property: 'fname', displayName: 'First Name' },
    { property: 'lname', displayName: 'Last Name' },
    { property: 'departmentName', displayName: 'Department' },
    { property: 'age', displayName: 'Age' }
  ];

  @Input() company: Company;
  formGroup: any;
  constructor(
    private companiesService: CompaniesService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      department: new FormControl('', [Validators.required]),
      fname: new FormControl('', [Validators.required]),
      lname: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required])
    });
  }

  onRemove(employee: Employee | Department) {
    this.companiesService.removeEmployee(
      this.company.name,
      employee.id as number
    );
  }

  onSubmit() {
    if (!this.formGroup.valid) {
      return;
    }

    const controls = this.formGroup.controls;

    const employee: Employee = {
      id: controls.id.value,
      fname: controls.fname.value,
      lname: controls.lname.value,
      age: controls.age.value,
      departmentName: controls.department.value
    };

    this.companiesService.addEmployee(this.company.name, employee);
    this.formGroup.reset();
  }
}

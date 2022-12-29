import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Company } from './company.interface';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../employees/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  $companies = new BehaviorSubject<Company[]>([]);
  $selectedCompany = new BehaviorSubject<Company | null>(null);
  constructor(private http: HttpClient) {}

  fetch() {
    this.http
      .get('./assets/companies.json')
      .subscribe((companies: any) => this.$companies.next(companies));
  }

  getCompany(companyName: string): Company {
    return this.$companies.value.filter(
      (company: Company) => company.name === companyName
    )[0];
  }

  setSelectedCompany(companyName: string) {
    this.$selectedCompany.next(this.getCompany(companyName));
  }

  removeEmployee(companyName: string, employeeId: number) {
    const updatedCompany = this.getCompany(companyName);
    updatedCompany.employees = updatedCompany.employees.filter(
      (e: any) => e.id !== employeeId
    );
    const updatedCompanies = this.$companies.value.map(currentComp =>
      currentComp.name === companyName ? updatedCompany : currentComp
    );
    this.$companies.next(updatedCompanies);
  }

  addEmployee(companyName: string, employee: Employee) {
    const updatedCompanies = this.$companies.value.map(currentComp => {
      if (currentComp.name === companyName) {
        const updatedCompany = currentComp;
        //Using the spread to detect that changes in the tree
        updatedCompany.employees = [...updatedCompany.employees, employee];
        return updatedCompany;
      }

      return currentComp;
    });

    this.$companies.next(updatedCompanies);
  }

  //The departmentTo? indicates if the user decided to move or remove the employees
  removeDepartments(departmentName: string, departmentTo?: string) {
    const selectedCompany = this.$selectedCompany.value;
    const updatedEmployees = selectedCompany.employees.map(
      (employee: Employee) => {
        if (employee.departmentName === departmentName) {
          const updateEmployee = employee;
          updateEmployee.departmentName = departmentTo;
          return departmentTo ? updateEmployee : null;
        }
        return employee;
      }
    );

    const updateDepartments = selectedCompany.departments.filter(
      d => d.name !== departmentName
    );
    selectedCompany.employees = updatedEmployees;
    selectedCompany.departments = updateDepartments;
    this.$selectedCompany.next(selectedCompany);
    const updatedCompanies = this.$companies.value.map((c: Company) => {
      if (c.name === selectedCompany.name) {
        return selectedCompany;
      }
      return c;
    });

    this.$companies.next(updatedCompanies);
  }
}

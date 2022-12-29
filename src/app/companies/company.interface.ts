import { Department } from '../departments/department.interface';
import { Employee } from '../employees/employee.interface';

export interface Company {
  name: string;
  id: string;
  departments: Department[];
  employees: Employee[];
}

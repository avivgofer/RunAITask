import { Component } from '@angular/core';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'app-companies-navigation',
  templateUrl: './companies-navigation.component.html',
  styleUrls: ['./companies-navigation.component.scss']
})
export class CompaniesNavigationComponent {
  constructor(public companiesService: CompaniesService) {}
}

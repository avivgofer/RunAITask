import { Component, OnInit, OnChanges } from '@angular/core';
import { CompaniesService } from './companies/companies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public companiesService: CompaniesService) {
    this.companiesService.fetch();
  }
  title = 'runAiTask';
}

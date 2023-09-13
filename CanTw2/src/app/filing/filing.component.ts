import { Component, OnInit } from '@angular/core';
import { FilingServiceService } from '../filing-service.service';

@Component({
  selector: 'app-filing',
  templateUrl: './filing.component.html',
  styleUrls: ['./filing.component.scss']
})
export class FilingComponent implements OnInit {

  constructor(private filingService: FilingServiceService) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.filingService.getFilingData('0001411579').subscribe(data => {
      console.log(data);
    });
  }
}
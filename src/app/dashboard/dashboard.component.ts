import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // data for section-1 
  data = [
    { test: 8, icon: 'assignment', color: 'skyblue', updated: "Last updated 1 min ago" },
    { test: 0, icon: 'assignment_turned_in', color: 'rgb(152, 201, 130)', updated: "Last updated 2 hour ago" },
    { test: 1, icon: 'assignment_late', color: 'orange', updated: "Last updated 40 min ago" },
    { test: 2, icon: 'assignment', color: 'rgb(137, 153, 207)', updated: "Last updated 10 days0 ago" }
  ]
  // data for section-2
  testResults = [
    { title: 'Number of Tests hosted', today: 0, yesterday: 2, last_7_days: 2, last_30_days: 5, last_90_days: 12 },
    { title: 'Number of Assignment hosted', today: 0, yesterday: 1, last_7_days: 0, last_10_days: 1, last_30_days: 0 }
  ]
  // data for section-3
  totalSubmission = [
    { title: 'Recent Submission in 7 days', result: 'No of submission in last 7 days' },
    { title: 'Tests being Attempted Recently', result: 'No of Tests being Attempted Recently' }
  ]
}

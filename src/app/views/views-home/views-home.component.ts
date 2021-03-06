import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {
      value: 22, label: '# of Users'
    },
    {
      value: 900, label: 'Revenue'
    },
    {
      value: 50, label: 'Satifaction Score'
    }
  ];

  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a couch'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a dresser'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

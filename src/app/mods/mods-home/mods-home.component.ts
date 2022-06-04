import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  items: any = [
    {
      title: 'Why is the sky blue?',
      content: 'The sky is blue because of the ocean'
    },
    {
      title: 'Why is the grass green?',
      content: 'The grass is green because of...'
    },
    {
      title: 'what color in that cat?',
      content: 'The cat is orange'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}

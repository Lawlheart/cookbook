import { Component, OnInit } from '@angular/core';

import { Link } from '../../interface/link.interface';

@Component({
  selector: 'app-nexus',
  templateUrl: './nexus.component.html',
  styleUrls: ['./nexus.component.scss']
})
export class NexusComponent implements OnInit {
  links: Link[] = [];

  constructor() {
    this.links = [
      { text: 'Interns', route: 'intern-profile' },
      { text: 'Apply', route: 'intern-form' },
      { text: 'Tailwind', route: 'tailwind-demo' },
    ];
  }

  ngOnInit() {
  }

}

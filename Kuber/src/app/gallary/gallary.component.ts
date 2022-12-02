import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  log()
  {
  this.route.navigate(["/log"])
  }

}

import { Component, OnInit } from '@angular/core';
import { Residence } from '../Core/Models/Residence';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  residences: Residence[] = []; 

  ngOnInit(): void {
    this.loadResidences();
  }

  loadResidences(): void {
  }
}


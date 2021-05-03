import { Component, OnInit } from '@angular/core';
import {Cours} from '../../Controller/Model/cours.model';
import {ParcoursService} from '../../Controller/Service/parcours.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent implements OnInit {


  constructor(private parcoursService: ParcoursService, private modalService: NgbModal) { }
  get coursList2(): Array<Cours> {
    return this.parcoursService.coursList2;
  }

  ngOnInit(): void {
    this.parcoursService.findAllCours2();
  }get cours(): Cours {
    return this.parcoursService.cours;
  }
  findCoursByLibelle(libel: string): void {
    this.parcoursService.findCoursByLibelle(libel);
  }

}

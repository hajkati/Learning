import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ParcoursService} from '../../Controller/Service/parcours.service';
import {Section} from '../../Controller/Model/section.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private parcoursService: ParcoursService, private modalService: NgbModal) { }
  // tslint:disable-next-line:typedef
  public deleteSection(sections: Section){
    this.parcoursService.deleteSection(sections);
  }
  get section(): Section {
    return this.parcoursService.section;
  }
  get sectionList(): Array<Section> {
    return this.parcoursService.sectionList;
  }

  public save(): void{
    this.parcoursService.save();
  }

  ngOnInit(): void {
  }

  open(content): void{
    this.modalService.open(content);
  }
  public savesection(): void{
    this.parcoursService.savesection();
  }
}

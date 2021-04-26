import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Section} from '../../Controller/Model/section.model';
import {SectionService} from '../../Controller/Service/section.service';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private sectionService: SectionService, private modalService: NgbModal) { }
  open(content): void {
    this.modalService.open(content);
  }
  // tslint:disable-next-line:typedef
  public save(){
    this.sectionService.save();
  }
  get section(): Section {

    return this.sectionService.section;
  }

  get sections(): Array<Section> {

    return  this.sectionService.sections ;
  }
  // tslint:disable-next-line:typedef
  public delete(index: number){
    this.sections.splice(index, 1);
  }
  // tslint:disable-next-line:typedef
  public update(index: number, section: Section){
    this.sectionService.update(index, section);
  }

  ngOnInit(): void {
    this.sectionService.findAll();

  }

}

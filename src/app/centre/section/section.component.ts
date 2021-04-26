import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  public save(){
    this.sectionService.save();
  }
  get section(): Section {

    return this.sectionService.section;}

  get sections(): Array<Section> {

    return  this.sectionService.sections ;
  }
  public delete(index: number){
    this.sections.splice(index, 1);
  }
  public update(index: number,section:Section){
    this.sectionService.update(index,section);
  }

  ngOnInit(): void {
    this.sectionService.findAll();

  }

}

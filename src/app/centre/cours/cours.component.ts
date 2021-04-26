import { Component, OnInit } from '@angular/core';
import {CoursService} from '../../Controller/Service/cours.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Cours} from '../../Controller/Model/cours.model';
@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  constructor(private coursService: CoursService, private modalService: NgbModal) { }

  open(content): void {
    this.modalService.open(content);
  }
  // tslint:disable-next-line:typedef
  public save(){
    this.coursService.save();
  }
  get cours(): Cours {

    return this.coursService.cours;
  }

  // tslint:disable-next-line:typedef
  public delete(index: number){
    this.courss.splice(index, 1);
  }
  // tslint:disable-next-line:typedef
  public update(index: number, cours: Cours){
    this.coursService.update(index, cours);

  }

  get courss(): Array<Cours> {

    return  this.coursService.courss ;
  }
  afficheSecList(i: number): void {
    this.coursService.affichelistSection(i);
  }
  ngOnInit(): void {
    this.coursService.findAll();
  }

}

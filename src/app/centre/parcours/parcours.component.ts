import { Component, OnInit } from '@angular/core';
import {Parcours} from '../../Controller/Model/parcours.model';
import {ParcoursService} from '../../Controller/Service/parcours.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent implements OnInit {


  constructor(private parcoursService: ParcoursService, private modalService: NgbModal) { }
  open(content): void {
    this.modalService.open(content);
  }
  get parcourss(): Array<Parcours> {

    return  this.parcoursService.parcourss ;
  }
  public delete(index: number){
    this.parcourss.splice(index, 1);
  }
  public update(index: number, parcours: Parcours){
    this.parcoursService.update(index, parcours);
  }
  public save(){
    this.parcoursService.save();
  }
  public validateSave(){
    return  this.parcoursService.validateSave();
  }

  get parcours(): Parcours {

    return this.parcoursService.parcours;}
  ngOnInit(): void {
    this.parcoursService.findAll();
  }
  afficheCours(i: number): void {
    this.parcoursService.afficheCours(i);
  }

}

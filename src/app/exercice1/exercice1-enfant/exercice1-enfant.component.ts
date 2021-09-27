import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  
  public result:number = 0; 

  @Input() compteur2: number;
  @Output() changeCompteur: EventEmitter<number> = new EventEmitter<number>();


  
  
  constructor() {
 
   }

  ngOnInit() {
  
  }
  
  public incrementeCompteur(){
     this.changeCompteur.emit(1);
  }
  public decrementeCompteur(){
    this.changeCompteur.emit(-1);

  }
}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit   {

  
  
    public valeur:string;
    @ViewChild('myinput',{static : false})  input: ElementRef<HTMLInputElement>;
  
         constructor() {
     
       }

       ngOnInit() {
       
         }


    public change(){
      this.valeur = this.input.nativeElement.value;
     }
 
}
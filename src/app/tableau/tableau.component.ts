import { SourceMapGenerator } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  titre :string ="1.Opérations sur un tableau";
  tab= [15, 46, 0, 89, 80];
 onAfficher (t:number,indice:number,compteur:number){
   console.log(t+" a pour position "+indice+"/"+compteur);
 }
 onPosition(indice:number){
  console.log(this.tab[indice]+" a pour position "+ (indice+1));
 }

 style:string ="italic";
 txt :string ="Italique/Normal";

 colorier(nb:number){
   if (nb%3==0)
   {
     return "magenta";
   }
   else return  "blue";
 }
 onStyle(){
   
   if(this.style=="normal")
   {this.style="italic";
  this.txt="Normal"; }
   else 
   { this.style="normal";
   this.txt="Italique";
  }
  

 }
    
  

  constructor() { }

  ngOnInit(): void {
  }

}

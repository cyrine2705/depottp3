import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listmateriel',
  templateUrl: './listmateriel.component.html',
  styleUrls: ['./listmateriel.component.css']
})
export class ListmaterielComponent implements OnInit {
  materiels = [
    {nom:'Scanner', reference: 'e7f8', image: 'assets/scanner.jpg', prix: 253.45,
     etat:'réparé'},
    {nom:'Ecran', reference: 'ec18', image: 'assets/ecrans.png', prix: 403.5,
   etat:'endommagé'},
    {nom:'Imprimante', reference: 'imp88', image: 'assets/imprimantes.jpg',
   prix: 189.5, etat:'endommagé'},
    {nom:'Pc Portable', reference: 'hp58', image: 'assets/pcPortables.png',
   prix: 1512.8, etat:'réparé'}
    ];
  onModifie(indice:number){
    if (this.materiels[indice].etat=="endommagé")
   { this.materiels[indice].etat="réparé";}

  }
   

  constructor() { }

  ngOnInit(): void {
  }

}

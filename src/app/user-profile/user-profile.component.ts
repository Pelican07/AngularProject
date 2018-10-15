import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    name = 'Panthère'
    firstName = 'Rose'
    age = 25
    quote = ' '
    photoSrc = 'https://i.ebayimg.com/images/g/9bYAAOxyOlhSq3bL/s-l1600.jpg'

    
    afficheAge = true;

  constructor() { }

  ngOnInit() {
  }

  afficherMasquer() {
    
    console.log("Afficher/Masquer mon âge");
  }
}

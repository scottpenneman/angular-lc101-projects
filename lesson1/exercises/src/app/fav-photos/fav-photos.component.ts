import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://i.etsystatic.com/5805234/r/il/7dc00d/1712348959/il_570xN.1712348959_dnfs.jpg';
  image3 = 'https://www.mariowiki.com/images/5/54/Goomba_Movie.jpg';

  constructor() { }

  ngOnInit() {
  }

}
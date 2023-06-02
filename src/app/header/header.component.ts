import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  languages = [
    {name: 'en', image: 'english-logo.png'},
    {name: 'fr', image: 'french-logo.png'}
  ];
  selectedLanguage = 'en';
  constructor(private translate: TranslateService) {}
  changeLanguage(){
    this.translate.use(this.selectedLanguage);
  }
  
}

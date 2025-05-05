import { Component} from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { IndexComponent } from './index/index.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { ZimmerComponent } from './zimmer/zimmer.component';
import { ContactformComponent } from './contactform/contactform.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'app-main-content',
  imports: [HeaderComponent, IndexComponent, ApartmentsComponent, ZimmerComponent, ContactformComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}

import { Component} from '@angular/core';
import { HeaderComponent } from "../shared/components/header/header.component";
import { IndexComponent } from './index/index.component';

@Component({
  selector: 'app-main-content',
  imports: [HeaderComponent, IndexComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}

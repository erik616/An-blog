import { Component } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { CardComponent } from "../../components/card/card.component";
import { MenuComponent } from "../../components/menu/menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleComponent, BigCardComponent, CardComponent, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

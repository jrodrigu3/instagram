import { Component } from '@angular/core';

import {
  SharedComponentsModule,
} from '../../shared/components/shared-components.module';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [SharedComponentsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}

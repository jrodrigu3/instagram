import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarComponent,
    HeaderComponent,
    ContentComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    ContentComponent
  ]
})
export class SharedComponentsModule { }

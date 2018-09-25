import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatAutocompleteTrigger, MatMenuContent ,MatMenuModule, MatMenu, MatMenuTrigger, MatGridListModule, MatCardModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import { LayoutComponent } from './modules/layout/layout.component';
import { AppHeaderComponent } from './modules/app-header/app-header.component';






@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AppHeaderComponent,
    
        
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

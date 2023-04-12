import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './topbar/topbar.component';
import {MatIconModule} from '@angular/material/icon';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { BannerComponent } from './banner/banner.component';
// import { RegistratioinComponent } from './registratioin/registratioin.component';

import { FormGroup,FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { AboutUniversityComponent } from './about-university/about-university.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FeaturedPageComponent } from './featured-page/featured-page.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    BannerComponent,
    // RegistratioinComponent,
    AboutUniversityComponent,
    FeaturedPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    TabsModule.forRoot(),
    MatGridListModule,
    NgbModule,
    MatTabsModule
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

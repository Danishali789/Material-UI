import { Component } from '@angular/core';


@Component({
  selector: 'app-featured-page',
  templateUrl: './featured-page.component.html',
  styleUrls: ['./featured-page.component.scss']
})
export class FeaturedPageComponent {
  showblock=true;
  showBlock(value:any): string{
     this.showblock=!this.showblock;
    console.log(value);
     return value;
  }
  

  // showBlock(el:any){
  //   <container-element [ngSwitch]="">
  //   <some-element *ngSwitchCase="match_expression_1">...</some-element>
  //   <some-element *ngSwitchCase="match_expression_2">...</some-element>
  //   <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
  //   <ng-container *ngSwitchCase="match_expression_3">
  //     <!-- use a ng-container to group multiple root nodes -->
  //     <inner-element></inner-element>
  //     <inner-other-element></inner-other-element>
  //   </ng-container>
  //   <some-element *ngSwitchDefault>...</some-element>
  // </container-element>
  // }

}
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {reducers} from './state/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {ReportsEffects} from './reports/state/reports.effects';
import {ReportsService} from './shared/services/reports.service';
import {HttpClientModule} from '@angular/common/http';
import {ReportsListComponent} from './reports/reports-list/reports-list.component';
import { ReportRowComponent } from './reports/reports-list/report-row/report-row.component';
import { SearchBarComponent } from './reports/search-bar/search-bar.component';
import { SelectComponent } from './reports/search-bar/select-component/select.component';
import {ReportsComponent} from './reports/reports.component';
import { InputComponent } from './reports/search-bar/input/input.component';
import {FormsModule} from "@angular/forms";
import { TagComponent } from './reports/tag/tag.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { SortByPipe } from './shared/pipes/sort-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ReportsListComponent,
    ReportRowComponent,
    SearchBarComponent,
    SelectComponent,
    ReportsComponent,
    InputComponent,
    TagComponent,
    HighlightDirective,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot([ReportsEffects]),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [ReportsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

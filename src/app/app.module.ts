import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { DataTableComponent } from "./components/data-table/data-table.component";

import { SpinnerComponent } from "./shared/spinner/spinner.component";
import { InputComponent } from "./shared/input/input.component";
import { CountryFilterPipe } from "./pipes/country-filter.pipe";
import { ButtonComponent } from './shared/button/button.component';
import { DateTimeComponent } from './shared/date-time/date-time.component';
import { GraphStatsComponent } from './components/graph-stats/graph-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DataTableComponent,
    SpinnerComponent,
    InputComponent,
    CountryFilterPipe,
    ButtonComponent,
    DateTimeComponent,
    GraphStatsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

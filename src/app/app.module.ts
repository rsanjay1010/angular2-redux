import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { NgReduxModule } from '@angular-redux/store';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// used to create fake backend
import { TransactionAPIService } from './services/transaction.service';
import { TransactionAPIActions } from './store/actions';
import { StoreModule } from './store/module';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { HomeComponent } from './home';
import { TransferListComponent, TransferComponent } from './transfers';
import { TransferFormComponent, TransferPreview } from './transferForm';
import { TransactionFilterPipe, TransactionSortPipe } from './pipe';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgReduxModule,
        StoreModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TransferListComponent,
        TransferComponent,
        TransferFormComponent,
        TransferPreview,
        TransactionFilterPipe,
        TransactionSortPipe
    ],
    providers: [
      TransactionAPIService,
      TransactionAPIActions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }

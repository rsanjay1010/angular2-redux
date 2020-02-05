import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';

import { transcactionReducer } from './reducers';
import { ITransactionList } from '../model';

@NgModule({
  imports: [NgReduxModule]
})
export class StoreModule {
  constructor(
    public store: NgRedux<any>,
    devTools: DevToolsExtension,
  ) {
    store.configureStore(
      transcactionReducer,
      {},
      [ createLogger()],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);

  }
}

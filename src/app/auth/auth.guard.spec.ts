import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

import { TranslateModule, TranslateLoader, TranslateService, TranslateStore } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { UrlSerializer, ChildrenOutletContexts, Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        TranslateService,  
        UrlSerializer,
        TranslateStore,
        HttpHandler,
        ChildrenOutletContexts,
        Router,
        UrlSerializer
      ],
    });
    guard = TestBed.inject(AuthGuard);
  });

});

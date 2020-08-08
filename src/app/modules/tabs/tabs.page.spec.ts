import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsPage } from './tabs.page';
import { TranslateModule, TranslateLoader, TranslateService, TranslateStore } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { UrlSerializer, ChildrenOutletContexts, Router } from '@angular/router';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabsPage],
      imports: [IonicModule.forRoot(),
        TranslateModule.forChild({
          loader:{
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          },
        }),
      ],
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
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});

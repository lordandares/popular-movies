import { TestBed, getTestBed } from '@angular/core/testing';

import { ThemoviedbService } from './themoviedb.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { listPopularMock } from './listPopularMock'
import { LIST_MOVIES, API_URL } from '../common/constants';

describe('ThemoviedbService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: ThemoviedbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    injector = getTestBed();
    service = TestBed.inject(ThemoviedbService);
    httpMock = injector.get(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('listMovies(10, es) should return listPopularMock', () => {
    service.listMovies(10, null).subscribe((res) => {
      expect(res).toEqual(listPopularMock);
    });

    const req = httpMock.expectOne(API_URL + LIST_MOVIES + 10 + '&language=null');
    expect(req.request.method).toBe('GET');
    req.flush(listPopularMock);
  });
});

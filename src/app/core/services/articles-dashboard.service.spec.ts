import { TestBed } from '@angular/core/testing';

import { ArticlesDashboardService } from './articles-dashboard.service';

describe('ArticlesDashboardService', () => {
  let service: ArticlesDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

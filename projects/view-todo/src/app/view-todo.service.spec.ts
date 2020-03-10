import { TestBed } from '@angular/core/testing';

import { ViewTodoService } from './view-todo.service';

describe('ViewTodoService', () => {
  let service: ViewTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

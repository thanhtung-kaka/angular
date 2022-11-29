import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlihanghoaComponent } from './quanlihanghoa.component';

describe('QuanlihanghoaComponent', () => {
  let component: QuanlihanghoaComponent;
  let fixture: ComponentFixture<QuanlihanghoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanlihanghoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlihanghoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

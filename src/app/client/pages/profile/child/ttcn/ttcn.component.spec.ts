import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TtcnComponent } from './ttcn.component';

describe('TtcnComponent', () => {
  let component: TtcnComponent;
  let fixture: ComponentFixture<TtcnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TtcnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TtcnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

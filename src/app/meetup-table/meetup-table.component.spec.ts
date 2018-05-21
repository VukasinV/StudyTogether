import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupTableComponent } from './meetup-table.component';

describe('MeetupTableComponent', () => {
  let component: MeetupTableComponent;
  let fixture: ComponentFixture<MeetupTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

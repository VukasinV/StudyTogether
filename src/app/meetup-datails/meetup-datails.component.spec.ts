import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupDatailsComponent } from './meetup-datails.component';

describe('MeetupDatailsComponent', () => {
  let component: MeetupDatailsComponent;
  let fixture: ComponentFixture<MeetupDatailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupDatailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

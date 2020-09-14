import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveStreamAudioComponent } from './live-stream-audio.component';

describe('LiveStreamAudioComponent', () => {
  let component: LiveStreamAudioComponent;
  let fixture: ComponentFixture<LiveStreamAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveStreamAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveStreamAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

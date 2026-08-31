import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjecInfo } from './projec-info';

describe('ProjecInfo', () => {
  let component: ProjecInfo;
  let fixture: ComponentFixture<ProjecInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjecInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjecInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

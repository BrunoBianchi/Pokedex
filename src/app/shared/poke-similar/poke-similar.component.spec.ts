import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSimilarComponent } from './poke-similar.component';

describe('PokeSimilarComponent', () => {
  let component: PokeSimilarComponent;
  let fixture: ComponentFixture<PokeSimilarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeSimilarComponent]
    });
    fixture = TestBed.createComponent(PokeSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

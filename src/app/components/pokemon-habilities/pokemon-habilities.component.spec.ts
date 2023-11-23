import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHabilitiesComponent } from './pokemon-habilities.component';

describe('PokemonHabilitiesComponent', () => {
  let component: PokemonHabilitiesComponent;
  let fixture: ComponentFixture<PokemonHabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonHabilitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonHabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

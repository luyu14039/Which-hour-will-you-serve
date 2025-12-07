import type { Aspect } from '../types';

const BASE_URL = import.meta.env.BASE_URL;

export const CHARACTER_IMAGES: Record<Aspect, string> = {
  'Lantern': BASE_URL + 'images/characters/Ehsan Fekri.jpg',
  'Forge': BASE_URL + 'images/characters/Lord Franklin Bancroft.jpg',
  'Edge': BASE_URL + 'images/characters/Lt Arthur Thomas Moore (Ret.).jpg',
  'Winter': BASE_URL + 'images/characters/Rowena.jpg',
  'Heart': BASE_URL + 'images/characters/Corso Reverte.jpg',
  'Grail': BASE_URL + 'images/characters/Princess Coquille Amirejibi.jpg',
  'Moth': BASE_URL + 'images/characters/Yvette Southey.jpg',
  'Knock': BASE_URL + 'images/characters/Mr Agdistis.jpg',
  'Secret Histories': BASE_URL + 'images/characters/Azita Bukhara.jpg'
};

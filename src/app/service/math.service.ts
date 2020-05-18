import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  static isPrime(num: number): boolean {
    for (let i = Math.floor(num / 2); i > 1; i--) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  static getFactors(num: number): number[] {
    const factors = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }

  static largestPrimeFactor(num: number): number | null {
    const start = num < 10 ? num : Math.floor(Math.sqrt(num));
    for (let i = start; i > 0; i--) {
      if (num % i === 0 && MathService.isPrime(i)) {
        return i;
      }
    }
    return null;
  }

}

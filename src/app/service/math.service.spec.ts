import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathService]
    });
    service = TestBed.get(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('isPrime returns true for first 10 prime numbers', () => {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
    primes.forEach(prime => {
      expect(MathService.isPrime(prime)).toEqual(true);
    });
  });

  it('isPrime returns false for non-prime numbers', () => {
    const nonprimes = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18];
    nonprimes.forEach(nonprime => {
      expect(MathService.isPrime(nonprime)).toEqual(false);
    });
  });

  it('getFactors returns an array of numbers', () => {
    const tests = [
      { num: 1, factors: [1] },
      { num: 4, factors: [1, 2, 4] },
      { num: 33, factors: [1, 3, 11, 33] },
    ];
    tests.forEach(({num, factors}) => {
      expect(MathService.getFactors(num)).toEqual(factors);
    });
  });

  it('largestPrimeFactor works for small and large numbers', () => {
    const tests = [
      { num: 2, answer: 2 },
      { num: 3, answer: 3 },
      { num: 5, answer: 5 },
      { num: 7, answer: 7 },
      { num: 8, answer: 2 },
      { num: 13195, answer: 29 },
      { num: 600851475143, answer: 6857 },
    ];
    tests.forEach(({ num, answer }) => {
      expect(MathService.largestPrimeFactor(num)).toEqual(answer);
    });
  });

});

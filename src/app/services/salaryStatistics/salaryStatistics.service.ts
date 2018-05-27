import {Injectable} from '@angular/core';

@Injectable()
export class SalaryStatisticsService {
  private minSalary: number;
  private maxSalary: number;

  public getMean(arr: number[]) {
    if (arr.length === 0) return 'No salary data available';

    let sum: number = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        sum += arr[i];
        ++count;
      }
    }

    return sum / count;
  }

  public getMedian(arr: number[]) {
    if (arr.length === 0) return 'No salary data available';
    let salaries = [];
    arr.sort(function(a, b){return a - b});

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        salaries.push(arr[i]);
      }
    }

    if (salaries.length % 2 === 0) return (salaries[salaries.length/2 - 1] + salaries[salaries.length/2]) / 2;

    return (salaries[Math.floor(salaries.length/2)]);
  }

  public getSalaryRange(arr: number[]) {
    if (arr.length === 0) return 'No salary data available';

    // Sort array, initialize index, and declare minimum salary
    arr.sort(function(a, b){return a - b});
    let i = 0;

    // Increment index until first non-zero salary is found
    while (arr[i] === 0) {
      i++;
    }

    // Initialize salaries
    this.minSalary = arr[i];
    this.maxSalary = arr[arr.length - 1];

    return this.maxSalary - this.minSalary;
  }
}

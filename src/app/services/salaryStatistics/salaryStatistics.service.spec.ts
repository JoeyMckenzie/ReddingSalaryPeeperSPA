import { SalaryStatisticsService } from './salaryStatistics.service';

describe('SalaryStatisticsService', function() {
  // Setup service
  let salaryStatistics: SalaryStatisticsService = new SalaryStatisticsService();


  it('should return the mean value given an array of numbers excluding zero value salaries', function() {
    // Given
    let arr: number[] = [0, 1, 2, 3, 4, 5, 6, 0];

    // When
    let meanValue = salaryStatistics.getMean(arr);

    // Then
    expect(meanValue).toEqual(3.5);
  });


  it('should return `No salary data available` when passing empty array to getMean', function() {
    // Given
    let arr: number[] = [];

    // When
    let meanValue = salaryStatistics.getMean(arr);

    // Then
    expect(meanValue).toEqual('No salary data available');
  });


  it('should return the median value given an array of numbers of odd length excluding zero value salaries', function() {
    // Given
    let arr: number[] = [5, 1, 2, 4, 3, 0, 32];

    // When
    let medianValue = salaryStatistics.getMedian(arr);

    // Then
    expect(medianValue).toEqual(3.5);
  });


  it('should return the median value given an array of numbers of even length excluding zero value salaries', function() {
    // Given
    let arr: number[] = [1, 2, 4, 3, 0, 32];

    // When
    let medianValue = salaryStatistics.getMedian(arr);

    // Then
    expect(medianValue).toEqual(3);
  });


  it('should return `No salary data available` when passing empty array to getMedian ', function() {
    // Given
    let arr: number[] = [];

    // When
    let medianValue = salaryStatistics.getMedian(arr);

    // Then
    expect(medianValue).toEqual('No salary data available');
  });


  it('should return salary range when passing array of numbers, excluding zero value salaries', function() {
    // Given
    let arr: number[] = [0, 1, 2, 3, 4];

    // When
    let salaryRange = salaryStatistics.getSalaryRange(arr);

    // Then
    expect(salaryRange).toEqual(3);
  });
});

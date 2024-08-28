// src/index.js

const { calculatePerformanceScores, normalizeDataForDisplay } = require('./transformations');
const employees = require('./data');

const performanceScores = calculatePerformanceScores(employees);
console.log('Performance Scores:', performanceScores);

const normalizedData = normalizeDataForDisplay(employees);
console.log('Normalized Data for Display:', normalizedData);
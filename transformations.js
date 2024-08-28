// src/transformations.js

const employees = require('./data');

// Function to calculate performance scores
const calculatePerformanceScores = (employeeData) => {
    return employeeData.map(employee => {
        return {
            id: employee.id,
            name: employee.name,
            performanceScore: (employee.hoursWorked * 1) + (employee.salesMade * 2)
        };
    });
};

// Function to normalize data for display
const normalizeDataForDisplay = (employeeData) => {
    return employeeData.map(employee => {
        return {
            fullName: employee.name,
            combinedMetric: `Hours: ${employee.hoursWorked}, Sales: ${employee.salesMade}`
        };
    });
};

module.exports = {
    calculatePerformanceScores,
    normalizeDataForDisplay
};
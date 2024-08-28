# My Enterprise Map Project

## Overview

This project demonstrates the use of JavaScript's `map` method through various enterprise scenarios using employee data and metrics. It shows how to calculate performance scores and normalize data for display.

## Explanation

- **`data.js`**: Contains the sample employee data.
- **`transformations.js`**: Contains functions that perform various transformations using `map`.
- **`index.js`**: Entry point to run and see the transformation results.

## Examples

### Calculating Performance Scores

Converts the employee data to include a performance score calculated as:

\[ \text{performanceScore} = (\text{hoursWorked} \times 1) + (\text{salesMade} \times 2) \]

### Normalizing Data for Display

Transforms the employee data to a more display-friendly format:

```javascript
{
    fullName: 'Alice',
    combinedMetric: 'Hours: 40, Sales: 20'
}
```

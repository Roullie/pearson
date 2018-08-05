# Pearson correlation coefficient
The Pearson correlation coefficient, r, can take a range of values from +1 to -1. A value of 0 indicates that there is no association between the two variables. A value greater than 0 indicates a positive association; that is, as the value of one variable increases, so does the value of the other variable.

### How to use
Include the pearson.js
``` js
<script type="js/javascript" src="pearson.js"></script>
```
Pass in 2 array to be calculated
``` js
  var arr1 = [17,13,12,15,16,14,16,16,18,19];
  var arr2 = [94,73,59,80,93,85,66,79,77,91];
  
  var res = pearsons.calc( arr1 ,arr2 );  
```

# Spearman's rank-order correlation
The Spearman's rank-order correlation is the nonparametric version of the Pearson product-moment correlation. Spearman's correlation coefficient, (ρ, also signified by rs) measures the strength and direction of association between two ranked variables.

### How to use
Include the spearman.js
``` js
<script type="js/javascript" src="spearman.js"></script>
```
Pass in 2 array to be checked
``` js
  var arr1 = [17,13,12,15,16,14,16,16,18,19];
	var arr2 = [94,73,59,80,93,85,66,79,77,91];
  
  var res = spearman.calc( arr1 ,arr2 );  
```

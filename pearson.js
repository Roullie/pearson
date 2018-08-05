var pearsons = {
		
		fixDecimal: function(n){
			return parseFloat((n).toFixed(2));
		},
		
		calc: function( d1 , d2 ){
			pearsons.result = {
				inp1: [],
				inp2: [],
				inp1_dedcut_median: [],
				inp2_dedcut_median: [],
				inp1_dedcut_median2: [],
				inp2_dedcut_median2: [],
				inp1_dedcut_median_mult_inp2_dedcut_median: [],
				total1 : 0,
				total2 : 0,
				median1 : 0,
				median2 : 0,
				total_i1_d_m2 : 0,
				total_i2_d_m2 : 0,
				total_i1_d_m_i2_d_m : 0
			};
			for(var i=0; i < d1.length; i++){
				pearsons.result.total1 += d1[i];
				pearsons.result.total2 += d2[i];
			}
			pearsons.result.median1 = pearsons.result.total1 / d1.length;
			pearsons.result.median2 = pearsons.result.total2 / d2.length;
			
			for(var i=0; i < d1.length; i++){
			
				pearsons.result.inp1.push(d1[i]);
				pearsons.result.inp2.push(d2[i]);
				
				var inp1_dedcut_median = pearsons.fixDecimal(d1[i] - pearsons.result.median1);
				var inp2_dedcut_median = pearsons.fixDecimal(d2[i] - pearsons.result.median2);
				
				pearsons.result.inp1_dedcut_median.push(inp1_dedcut_median);
				pearsons.result.inp2_dedcut_median.push(inp2_dedcut_median);
				
				pearsons.result.inp1_dedcut_median2.push( pearsons.fixDecimal( inp1_dedcut_median*inp1_dedcut_median ) );
				pearsons.result.total_i1_d_m2 += pearsons.fixDecimal( inp1_dedcut_median*inp1_dedcut_median );
				
				pearsons.result.inp2_dedcut_median2.push( pearsons.fixDecimal( inp2_dedcut_median*inp2_dedcut_median ) );
				pearsons.result.total_i2_d_m2 += pearsons.fixDecimal( inp2_dedcut_median*inp2_dedcut_median );
				
				pearsons.result.inp1_dedcut_median_mult_inp2_dedcut_median.push( pearsons.fixDecimal( inp1_dedcut_median * inp2_dedcut_median ) );				
				pearsons.result.total_i1_d_m_i2_d_m += pearsons.fixDecimal( inp1_dedcut_median * inp2_dedcut_median );
				
			}
			
			pearsons.result.total_i1_d_m2 = pearsons.fixDecimal(pearsons.result.total_i1_d_m2);
			pearsons.result.total_i2_d_m2 = pearsons.fixDecimal(pearsons.result.total_i2_d_m2);
			pearsons.result.total_i1_d_m_i2_d_m = pearsons.fixDecimal(pearsons.result.total_i1_d_m_i2_d_m);			
			
			
			return parseFloat( ( pearsons.result.total_i1_d_m_i2_d_m / parseFloat(Math.sqrt(pearsons.result.total_i1_d_m2 * pearsons.result.total_i2_d_m2).toFixed(3)) ) .toFixed(3));
			
		}
		
	};

function convertToRoman(num) {
  	const romanPairs= {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here

	let result = '';


    for (const [roman, value] of romanPairs) {
      
        while (num >= value) {
            result += roman; 
            num -= value; 
        }
    }

    return result;

}

module.exports = convertToRoman

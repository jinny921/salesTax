var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function sum(array) {
  var arraySum = 0;
  for (i = 0; i < array.length; i++) {
    arraySum += array[i];
  }
  return arraySum;
}

function calculateSalesTax(salesData, taxRates) {
  var output = {};

    // Telus: {
    //   totalSales: 1300,
    //   totalTaxes: 144
    // },
    // Bonbardier: {
    //   totalSales: 800,
    //   totalTaxes: 40
    // }

  for (var company of salesData) {
    var totalSales = sum(company.sales);

    if(output[company.name]) {
      output[company.name].totalSales += totalSales;
      output[company.name].totalTaxes += totalSales * taxRates[company.province];
    } else {
      output[company.name] = {
        totalSales: totalSales,
        totalTaxes: totalSales * taxRates[company.province]
      }
    }
  }
  return output;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/





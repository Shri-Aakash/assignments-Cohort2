/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryWiseTotal={};
  let result=[]
  for (let i = 0; i < transactions.length; i++) {
    if(!categoryWiseTotal[transactions[i]["category"]])
    {
      categoryWiseTotal[transactions[i]["category"]]=0;
    }
    categoryWiseTotal[transactions[i]["category"]]+=transactions[i]["price"];
  }
  for(let key in categoryWiseTotal)
  {
    if(categoryWiseTotal.hasOwnProperty(key))
    {
      result.push({"category":key,"totalSpent":categoryWiseTotal[key]})
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;

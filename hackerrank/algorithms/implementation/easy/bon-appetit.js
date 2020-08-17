// SCORE: 10/10
function bonAppetit(bill, k, b) {
  bill.splice(k, 1)
  const expectedPayment = bill.reduce((acc, value) => acc + value, 0) / 2;

  if (expectedPayment === b) {
    console.log('Bon Appetit')
  } else {
    console.log(b - expectedPayment)
  }
}

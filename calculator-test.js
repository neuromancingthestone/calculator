
it('should calculate the monthly rate correctly', function () {
  const vals = {
    amount: 200000,
    years: 30,
    rate: 5.5
  };
  expect(calculateMonthlyPayment(vals)).toEqual('1135.58');
});


it('should return a result with 2 decimal places', function() {
  const vals = {
    amount: 300000,
    years: 15,
    rate: 5.5
  };
  expect(calculateMonthlyPayment(vals)).toEqual('2451.25');
});

/// etc

import FizzBuzz from './FizzBuzz';

test ('it displays numbers', () => {
  const fizzy = new FizzBuzz();
  const results = fizzy.generateList(2);

  expect(results[0]).toBe(1);
  expect(results[1]).toBe(2);
})

test ('it can fizz', () => {
    const fizzy = new FizzBuzz();
    const results = fizzy.generateList(3);
  
    expect(results[2]).toBe('Fizz');
})

test ('it can buzz', () => {
    const fizzy = new FizzBuzz();
    const results = fizzy.generateList(5);
  
    expect(results[4]).toBe('Buzz');
})
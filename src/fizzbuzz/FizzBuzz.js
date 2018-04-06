import React, { Component } from 'react';
import './FizzBuzz.css'

class FizzBuzz extends Component {

  generateList(size) {
    var foo = [1,2,3];
    return foo;
  }

  render() {
    const count = 100;
    const fizzBuzzList = this.generateList(count);
    const fizzyList = fizzBuzzList.map((element) => <li>{element}</li>)
    return (
      <ol className="FizzBuzz">
        {fizzyList}
      </ol>
    );
  }
}

export default FizzBuzz;
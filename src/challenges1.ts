
/*
# Bit counting

# Write a function that takes an integer as input, 
# and returns the number of bits that are equal to one in the binary representation of that number. 
# You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

# research:
==

** Bits

A bit is the most basic unit of data in a computer. It can hold one of two possible values: 0 or 1.
These values represent a binary system, which is the foundation of all computer data and processing.
The term "bit" is short for binary digit.

** bytes

# explain (bit counting):
==

input => 15 decimal (base 10)

# convert it it to binary.
# 1111

# count the number of 1s. in each bit

# problems:

# convert int to binary
# count the number of bits with 1



*/ 

const convertDecimalToBinary = (integer: number) => {

  // stack
  const binaries:any = [];

  let quotient = integer;

  // 3 / 2 = 1 :: 2 / 2 = 1 :: 1 / 2 = 0
  while (quotient !== 0) {
    const remainder = quotient % 2; // remainder

    quotient = Math.floor(quotient / 2);
    
    binaries.push(remainder);
  }

  return binaries.reverse();
}

function bitCounting(n: number){

  // no negative number is allowed
  if (n < 0) return n;

  // convert decimal to binary
  // 15 / 2 = 7 r=1
  const binaryNumber:number[] = convertDecimalToBinary(n);

  // count bits that contain 1
  let count = 0;
  binaryNumber.forEach((v:any) => v === 1 && count++);

  // number of bits that contain 1
  console.log(count);
}

function challenges1Run() {
  bitCounting(15); // 1111 => 4
  bitCounting(13); // 1101 => 3
  bitCounting(2); // 0010 => 1
  bitCounting(9); // 1001 => 2
}

export {
  challenges1Run,
} 
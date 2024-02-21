const size = 10;

// Loop through rows
for (let i = 0; i < size; i++) {
  let line = "";

  // Loop through columns
  for (let j = 0; j < 2 * size; j++) {
    const leftSide =
      (j >= size - i && j <= size) || (j <= size + i && j >= size);
    const rightSide =
      (j <= size + i && j >= size) || (j >= size - i && j <= size);

    // Print '*' if it's part of the heart shape, otherwise print a space
    line += leftSide && rightSide ? "*" : " ";
  }

  console.log(line);
}



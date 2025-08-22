function kgToLbs(weight: number | string): number {
  // weight. <--- Can only see properties and methods common to both types number and string (e.g. toLocaleString, toString, valueOf)
  // Narrowing the type to number
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

// Usage examples
kgToLbs(10); // 22
kgToLbs("10"); // 22

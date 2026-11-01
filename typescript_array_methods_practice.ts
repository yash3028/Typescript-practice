const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => number * 2);
console.log("map - doubled:", doubled);

const squared = numbers.map((number) => number ** 2);
console.log("map - squared:", squared);

const names = ["alice", "bob", "charlie"];

const upperNames = names.map((name) => name.toUpperCase());
console.log("map - uppercase:", upperNames);

interface User {
  id: number;
  name: string;
  age: number;
}

const users: User[] = [
  { id: 1, name: "Alice", age: 24 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 27 },
];

const userNames = users.map((user) => user.name);
console.log("map - user names:", userNames);

const userSummaries = users.map((user) => ({
  id: user.id,
  displayName: `${user.name} (${user.age})`,
}));

console.log("map - user summaries:", userSummaries);
const indexedNames = names.map((name, index) => `${index + 1}. ${name}`);
console.log("map - indexed:", indexedNames);

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("filter - even:", evenNumbers);

const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log("filter - odd:", oddNumbers);

const adults = users.filter((user) => user.age >= 25);
console.log("filter - adults:", adults);

const longNames = names.filter((name) => name.length > 4);
console.log("filter - long names:", longNames);

const youngAdults = users.filter((user) => user.age >= 25 && user.age <= 28);
console.log("filter - young adults:", youngAdults);

const sum = numbers.reduce((total, number) => total + number, 0);
console.log("reduce - sum:", sum);

const product = numbers.reduce((result, number) => result * number, 1);

console.log("reduce - product:", product);

const average =
  numbers.reduce((total, number) => total + number, 0) / numbers.length;

console.log("reduce - average:", average);

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCounts = fruits.reduce<Record<string, number>>((counts, fruit) => {
  counts[fruit] = (counts[fruit] ?? 0) + 1;
  return counts;
}, {});

console.log("reduce - fruit counts:", fruitCounts);

const usersByAge = users.reduce<Record<number, User[]>>((groups, user) => {
  (groups[user.age] ??= []).push(user);
  return groups;
}, {});

console.log("reduce - users by age:", usersByAge);

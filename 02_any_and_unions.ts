let value: any = 10;
value = "hello";
value = true;

let id: string | number;
id = 123;
id = "abc";

function printId(id: string | number): void {
  console.log(id);
}

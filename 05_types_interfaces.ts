type Product = {
  id: number;
  name: string;
  price: number;
};

interface Customer {
  id: number;
  name: string;
  email?: string;
  readonly createdAt: Date;
}

const customer: Customer = {
  id: 1,
  name: "Alice",
  createdAt: new Date(),
};

interface Employee extends Customer {
  department: string;
}

function identity<T>(value: T): T {
  return value;
}

const n = identity(10);
const s = identity("hello");

function first<T>(items: T[]): T | undefined {
  return items[0];
}

function getId<T extends { id: number }>(item: T): number {
  return item.id;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const response: ApiResponse<User> = {
  data: { name: "Alice", email: "a@example.com" },
  success: true,
};

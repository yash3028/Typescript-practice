function formatId(id: string | number): string {
  if (typeof id === "number") {
    return `ID-${id.toFixed(0)}`;
  }
  return id.toUpperCase();
}

type User = { name: string; email: string };
type Admin = User & { permissions: string[] };

function isAdmin(user: User | Admin): user is Admin {
  return "permissions" in user;
}

function describe(user: User | Admin): string {
  if (isAdmin(user)) {
    return `${user.name}: ${user.permissions.join(", ")}`;
  }
  return user.name;
}

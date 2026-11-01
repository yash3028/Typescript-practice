type WithTimestamps = {
  createdAt: Date;
  updatedAt: Date;
};

type Order = {
  id: number;
  total: number;
} & WithTimestamps;

type Direction = "left" | "right" | "up" | "down";

type UserKeys = keyof User;

type UserRoles = Record<string, "admin" | "user">;

type UpdateUser = Partial<User>;

type UserPreview = Pick<User, "name" | "email">;

type UserWithoutEmail = Omit<User, "email">;

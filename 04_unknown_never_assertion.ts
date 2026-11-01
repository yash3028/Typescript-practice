function parseValue(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }
  return String(value);
}

const input = document.querySelector("#email") as HTMLInputElement | null;

function fail(message: string): never {
  throw new Error(message);
}

type Status = "loading" | "success" | "error";

function statusMessage(status: Status): string {
  switch (status) {
    case "loading":
      return "Loading";
    case "success":
      return "Done";
    case "error":
      return "Failed";
  }
}

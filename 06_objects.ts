interface Settings {
  readonly id: number;
  theme?: "light" | "dark";
  [key: string]: unknown;
}

const settings: Settings = {
  id: 1,
  theme: "dark",
  language: "en",
};

function countOccurrences(items: string[]): Record<string, number> {
  const counts: Record<string, number> = {};

  for (const item of items) {
    counts[item] = (counts[item] ?? 0) + 1;
  }

  return counts;
}

function removeDuplicates<T>(items: T[]): T[] {
  return [...new Set(items)];
}

function groupBy<T, K extends string | number>(
  items: T[],
  keyFn: (item: T) => K,
): Record<K, T[]> {
  const result = {} as Record<K, T[]>;

  for (const item of items) {
    const key = keyFn(item);
    (result[key] ??= []).push(item);
  }

  return result;
}

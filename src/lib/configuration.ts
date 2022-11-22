export function getConfigValue(key: string) {
  try {
    // @ts-ignore
    const value = Oxygen?.env[key];
    return value;
    // eslint-disable-next-line no-empty
  } catch (error) {}

  try {
    const value = import.meta.env[key];
    return value;
    // eslint-disable-next-line no-empty
  } catch (error) {}

  return process.env[key];
}

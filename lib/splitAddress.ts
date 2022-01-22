const splitAddress = (address: string) => {
  const [host, port] = address.split(":");
  return { host, port: parseInt(port) || 25565 };
};

export { splitAddress };

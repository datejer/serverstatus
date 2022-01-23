const splitAddress = (address: string, defaultPort?: number) => {
  const [host, port] = address.split(":");
  return { host, port: parseInt(port) || defaultPort || 25565 };
};

export { splitAddress };

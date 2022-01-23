export type MinecraftServer = {
  online: boolean;
  host: string;
  ip: string | null;
  port: number | null;
  version: string | null;
  protocol: number | null;
  software: string | null;
  plugins: string[];
  map: string | null;
  motd: {
    raw: string | null;
    clean: string | null;
    html: string | null;
  };
  favicon: string | null;
  players: {
    online: number;
    max: number;
    list: string[] | { name: string; id: string }[];
  };
  ping: number | null;
  debug: {
    status: boolean;
    query: boolean;
    legacy: boolean;
  };
};

export type BedrockServer = {
  online: boolean;
  host: string;
  port: {
    ipv4: number | null;
    ipv6: number | null;
    srv: number | null;
  };
  edition: string | null;
  version: string | null;
  protocol: number | null;
  guid: string | null;
  id: string | null;
  gamemode: {
    id: number | null;
    name: string | null;
  };
  motd: {
    raw: string | null;
    clean: string | null;
    html: string | null;
  };
  players: {
    online: number;
    max: number;
  };
};

export type Error = {
  error: boolean;
  message: string;
};

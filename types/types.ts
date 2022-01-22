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
};

export type Error = {
  error: boolean;
  message: string;
};

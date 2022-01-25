import { splitAddress } from "./address";
import { status, queryFull, statusBedrock, statusLegacy } from "minecraft-server-util";
import { BedrockServer, MinecraftServer } from "../types/types";

const getServerInfo = async (address: string): Promise<MinecraftServer> => {
  const { host, port } = splitAddress(address);

  let s, q, l;

  const res = await Promise.allSettled([
    status(host, port),
    queryFull(host, port),
    statusLegacy(host, port),
  ]);

  res[0].status === "fulfilled" && (s = res[0].value);
  res[1].status === "fulfilled" && (q = res[1].value);
  res[2].status === "fulfilled" && (l = res[2].value);

  return {
    online: !!s || !!q || !!l,
    host: s?.srvRecord?.host || l?.srvRecord?.host || host,
    ip: q?.hostIP || null,
    port: q?.hostPort || s?.srvRecord?.port || l?.srvRecord?.port || port || null,
    version: q?.version || s?.version?.name || l?.version?.name || null,
    protocol: s?.version?.protocol || l?.version?.protocol || null,
    software: q?.software || s?.version?.name || null,
    plugins: q?.plugins || [],
    map: q?.map || null,
    motd: {
      raw: q?.motd?.raw || s?.motd?.raw || l?.motd?.raw || null,
      clean: q?.motd?.clean || s?.motd?.clean || l?.motd?.clean || null,
      html: q?.motd?.html || s?.motd?.html || l?.motd?.html || null,
    },
    favicon: s?.favicon || null,
    players: {
      online: q?.players?.online || s?.players?.online || l?.players?.online || 0,
      max: q?.players?.max || s?.players?.max || l?.players?.max || 0,
      list:
        s?.players?.sample ||
        q?.players?.list.map((p) => {
          return { name: p, id: null };
        }) ||
        [],
    },
    ping: s?.roundTripLatency || null,
    debug: {
      status: !!s,
      query: !!q,
      legacy: !s && !!l,
    },
  };
};

const getBedrockServerInfo = async (address: string): Promise<BedrockServer> => {
  const { host, port } = splitAddress(address, 19132);

  let s;

  try {
    s = await statusBedrock(host, port);
  } catch (error) {
    s = null;
  }

  return {
    online: !!s,
    host: s?.srvRecord?.host || host,
    port: {
      ipv4: s?.portIPv4 || port,
      ipv6: s?.portIPv6 || null,
      srv: s?.srvRecord?.port || null,
    },
    edition: s?.edition || null,
    version: s?.version?.name || null,
    protocol: s?.version?.protocol || null,
    guid: s?.serverGUID.toString() || null,
    id: s?.serverID || null,
    gamemode: {
      id: s?.gameModeID || null,
      name: s?.gameMode || null,
    },
    motd: {
      raw: s?.motd?.raw || null,
      clean: s?.motd?.clean || null,
      html: s?.motd?.html || null,
    },
    players: {
      online: s?.players?.online || 0,
      max: s?.players?.max || 0,
    },
  };
};

export { getServerInfo, getBedrockServerInfo };

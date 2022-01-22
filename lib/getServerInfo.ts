import { splitAddress } from "./splitAddress";
import { status, queryFull } from "minecraft-server-util";

const getServerInfo = async (address: string) => {
  const { host, port } = splitAddress(address);

  let s, q;

  try {
    s = await status(host, port);
  } catch (error) {
    s = null;
  }

  try {
    q = await queryFull(host, port);
  } catch (error) {
    q = null;
  }

  return {
    online: !!s || !!q,
    host: s?.srvRecord?.host || host,
    ip: q?.hostIP || null,
    port: q?.hostPort || s?.srvRecord?.port || port || null,
    version: q?.version || s?.version?.name || null,
    protocol: s?.version?.protocol || null,
    software: q?.software || s?.version?.name || null,
    plugins: q?.plugins || [],
    map: q?.map || null,
    motd: {
      raw: q?.motd?.raw || s?.motd?.raw || null,
      clean: q?.motd?.clean || s?.motd?.clean || null,
      html: q?.motd?.html || s?.motd?.html || null,
    },
    favicon: s?.favicon || null,
    players: {
      online: q?.players?.online || s?.players?.online || 0,
      max: q?.players?.max || s?.players?.max || 0,
      list: s?.players?.sample || q?.players?.list || [],
    },
    ping: s?.roundTripLatency || null,
  };
};

export { getServerInfo };

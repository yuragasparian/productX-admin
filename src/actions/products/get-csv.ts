import { env } from "@/lib/env";
import fetchBolb from "@/lib/fetch-bolb";

const getCSV = async () => {
  return fetchBolb(`${env.SERVER_URL}/products/csv`);
};

export default getCSV;

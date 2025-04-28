import { env } from "@/lib/env";
import fetchBlob from "@/lib/fetch-blob";

const getCSV = async () => {
  return await fetchBlob(`${env.SERVER_URL}/products/csv`);
};

export default getCSV;

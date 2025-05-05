import userStore from "@/store/user";
import { env } from "./env";
import type { Response } from "@/types/response";

const fetchBlob = async (endpoint: string): Promise<Response<Blob>> => {
  const token = userStore.getState().token;

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
  };
  const url = env.SERVER_URL + endpoint;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers,
    });

    const blob = await response.blob();

    return {
      meta: {
        error: null,
        status: 200,
      },
      data: blob,
    };
  } catch {
    return {
      meta: {
        status: 400,
        error: {
          code: 4000,
          message: "Unexpected client-side error",
        },
      },
      data: null,
    };
  }
};

export default fetchBlob;

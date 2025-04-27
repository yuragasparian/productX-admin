import { Response } from "@/types/response";
import userStore from "@/store/user";
import { env } from "./env";

type FetchOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: BodyInit | null;
};

const fetchWithAuth = async <T>(
  endpoint: string,
  options: FetchOptions = {},
): Promise<Response<T>> => {
  const token = userStore.getState().token;
  const isFormData = options.body instanceof FormData;

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    ...options.headers,
    ...(isFormData ? {} : { "Content-Type": "application/json" }),
  };

  try {
    const response = await fetch(env.SERVER_URL + endpoint, { ...options, headers });
    return await response.json();
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

export default fetchWithAuth;

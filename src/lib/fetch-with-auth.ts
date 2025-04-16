import { ok } from "assert";
import { json } from "stream/consumers";

type FetchOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: BodyInit | null;
};

const fetchWithAuth = async <T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> => {
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/login";
    return Promise.reject("No token found");
  }

  const isFormData = options.body instanceof FormData;

  const headers: Record<string, string> = {
    "Authorization": `Bearer ${token}`,
    ...options.headers,
    ...(isFormData ? {} : { "Content-Type": "application/json" }), // Only add if not FormData
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
};

export default fetchWithAuth
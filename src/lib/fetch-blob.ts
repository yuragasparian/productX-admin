import userStore from "@/store/user";

const fetchBlob = async (url: string) => {
  const token = userStore.getState().token;

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
  };

  const response = await fetch(url, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }

  return response.blob();
};

export default fetchBlob;

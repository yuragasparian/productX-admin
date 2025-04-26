const fetchBolb = async (url: string) => {
  const token = localStorage.getItem("token");

  // if (!token) {
  //     window.location.href = "/login"
  //     throw new Error(`Unauthorized`);
  // }

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

export default fetchBolb;

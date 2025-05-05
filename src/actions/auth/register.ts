import { UserInfo } from "@/types/response";
import fetchWithAuth from "@/lib/fetch-with-auth";
import PopupAlert from "@/components/ui/popup-alert";

export default async function register(credentials: FormData) {
  console.log(credentials);

  const { meta, data } = await fetchWithAuth<UserInfo>(`/auth/register`, {
    method: "POST",
    body: credentials,
  });
  if (!data) {
    PopupAlert.show({ message: meta.error?.message });
    return;
  }
  return data.item;
}

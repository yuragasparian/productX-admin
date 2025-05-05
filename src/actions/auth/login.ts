import { Login } from "@/forms/resolvers/login-schema";
import { Token } from "@/types/response";
import fetchWithAuth from "@/lib/fetch-with-auth";
import PopupAlert from "@/components/ui/popup-alert";

export default async function login(credentials: Login) {
  const { meta, data } = await fetchWithAuth<Token>(`/auth/login`, {
    method: "POST",
    body: JSON.stringify(credentials),
  });
  if (!data) {
    PopupAlert.show({ message: meta.error?.message });
    return;
  }
  return data.item;
}

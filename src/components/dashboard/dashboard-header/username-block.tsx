import userStore from "@/store/user";
import Image from "next/image";
import Button from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import PopupAlert from "@/components/ui/popup-alert";
import { redirect } from "next/navigation";
import { imagePath } from "@/lib/utils";

const UsernameBlock = () => {
  const user = userStore((state) => state.user);
  if (!user) return null;

  const onLogout = () => {
    PopupAlert.show({
      message: "Do you want to logout?",
      onConfirm() {
        localStorage.removeItem("token");
        redirect("/login");
      },
    });
  };

  return (
    <div className="flex justify-evenly rounded-[8px] items-center gap-3 bg-white py-2 px-4">
      <Image
        className="object-cover rounded-full "
        width={32}
        height={32}
        src={imagePath(user.image)}
        alt="profile image"
      />
      <span className="p4">{user.userName}</span>
      <Button size={"icon"} variant={"default"} onClick={onLogout}>
        <Icon name="logout" />
      </Button>
    </div>
  );
};

export default UsernameBlock;

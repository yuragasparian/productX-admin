import Image from "next/image";
import Button from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import PopupAlert from "@/components/ui/popup-alert";
import { getImagePath } from "@/lib/utils";
import { PublicUser } from "@/types/user";
import userStore from "@/store/user";

type Props = {
  user: PublicUser;
};

const UsernameBlock = ({ user }: Props) => {
  const onLogout = () => {
    PopupAlert.show({
      message: "Do you want to logout?",
      onConfirm() {
        const reset = userStore.getState().reset;
        reset();
      },
    });
  };

  return (
    <div className="flex justify-evenly rounded-[8px] items-center gap-3 bg-white py-2 px-4">
      <Image
        className="object-cover rounded-full aspect-square"
        width={32}
        height={32}
        src={getImagePath(user.image)}
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

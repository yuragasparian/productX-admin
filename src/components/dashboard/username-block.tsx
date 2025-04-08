import userStore from "@/store/user-store";
import Image from "next/image";
import Button from "../button";

const UsernameBlock = () => {
  const { user } = userStore();
  if (!user) return null;

  return (
  <div className="flex justify-evenly rounded-[8px] items-center gap-3 bg-white py-2 px-4">
    <Image className="object-cover rounded-full " width={32} height={32} src={user.user_image} alt="profile image" />
    <span className="p4">{user.username}</span>
    <Button size={"icon"} variant={"default"}>
      <Image width={16} height={16} src={"icons/logout.svg"} alt={""} ></Image>
    </Button>
  </div>);
};

export default UsernameBlock;



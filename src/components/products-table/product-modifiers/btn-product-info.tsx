import Button from "@/components/button";
import Image from "next/image";

const BtnProductInfo = () => {
  return (
    <Button size={"icon"} variant={"default"}>
      <Image width={16} height={16} src={"icons/info.svg"} alt={""}></Image>
    </Button>
  );
};

export default BtnProductInfo;

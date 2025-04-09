import Button from "@/components/button";
import Image from "next/image";

const BtnEditProduct = () => {
  return (
    <Button size={"icon"} variant={"default"}>
      <Image width={16} height={16} src={"icons/edit.svg"} alt={""}></Image>
    </Button>
  );
};

export default BtnEditProduct;

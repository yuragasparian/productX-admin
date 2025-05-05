import PopupAlert from "@/components/ui/popup-alert";
import fetchBlob from "@/lib/fetch-blob";

const getCSV = async () => {
  const { meta, data } = await fetchBlob(`/products/csv`);
  if (!data) {
    PopupAlert.show({ message: meta.error?.message });
    return;
  }
  return data;
};

export default getCSV;

import { ProductFormFields } from "@/types/product";

function formDataFromDirtyValues<T extends ProductFormFields>(
  allValues: T,
  dirtyFields?: Partial<Record<keyof T, boolean | undefined>>,
): FormData {
  const formData = new FormData();

  // Determine which fields need to be processed: dirtyFields or allFields
  const fieldsToProcess = dirtyFields ?? ({} as Partial<Record<keyof T, boolean>>);

  // If dirtyFields is not provided, mark all fields as dirty
  if (!dirtyFields) {
    for (const key in allValues) {
      fieldsToProcess[key as keyof T] = true;
    }
  }

  // Loop through fieldsToProcess and append the corresponding values to FormData
  for (const key in fieldsToProcess) {
    if (fieldsToProcess[key] === true) {
      const value = allValues[key];

      // Append value as a string or file
      if (value instanceof FileList) {
        formData.append(key as string, value[0]);
      } else {
        formData.append(key as string, String(value));
      }
    }
  }

  return formData;
}

export default formDataFromDirtyValues;

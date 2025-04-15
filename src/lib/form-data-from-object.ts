const formDataFromObject = (data: Record<string, any>) => {
    const form = new FormData();
    const {product_image, ...values} = data
    Object.entries(values).forEach(([key, value]) => {
      let castValue = value;
          if (typeof value === "string" && !isNaN(Number(value)) && value.trim() !== "") {
        castValue = Number(value);
      }
      form.append(key, castValue);
    });
    return form;
  };
export default formDataFromObject
"use client"

import fetchWithAuth from "@/lib/fetch-with-auth";
// import { productFilterStore } from "@/store/product-filter-store";
import { ReqReturnType } from "@/types/product";

export type Params = {
  page: string
  query: string;
  status: string;
}

const getProducts = async (params:Params): Promise<ReqReturnType> => {


  const cleanReqParams = Object.fromEntries(
    Object.entries(params).filter(([_, v]) => v !== '')
  );

  const searchParams = new URLSearchParams(cleanReqParams).toString();
  console.log(searchParams);

  return fetchWithAuth<ReqReturnType>(`${process.env.NEXT_PUBLIC_SERVER_URL}/products?${searchParams}`);
};

export default getProducts;

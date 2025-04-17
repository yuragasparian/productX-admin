import fetchBolb from "@/lib/fetch-bolb";

const getCSV = async () => {
    return fetchBolb(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/csv`);
}

export default getCSV
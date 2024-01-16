import axios from "axios";
const endpoint = process.env.NEXT_PUBLIC_ENDPOINT;

type PayloadProps = {
    accessory: string,
    background: string,
    clothe: string,
    eye: string,
    hat: string,
    mouth: string,
    shell: string,
}

export const getSuocNFTMetadata = async (payload: PayloadProps) => {
    const response = await axios.post(`${endpoint}/mint/getSuocNFTMetadata`, payload);
    return response.data;
}

export const getAddressInfo = async (payload: { address: string }) => {
    const response = await axios.post(`${endpoint}/mint/getAddressInfo`, payload);
    return response.data;
}

export const getCurrentTier = async () => {
    const response = await axios.get(`${endpoint}/mint/getCurrentTier`);
    return response.data;
}

export const createdNFT = async (payload: { address: string }) => {
    const response = await axios.post(`${endpoint}/mint/createdNFT`, payload);
    return response.data;
}

export const getIsMintable = async (payload: { address: string, count: number, isWhiteList: boolean }) => {
    const response = await axios.post(`${endpoint}/mint/getIsMintable`, payload);
    return response.data;
}

export const payForMint = async (payload: { address: string, count: number }) => {
    const response = await axios.post(`${endpoint}/mint/payForMint`, payload);
    return response.data;
}
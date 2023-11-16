import axios from "axios";

export async function getVoucher(clientCpf: string): Promise<string>{
    try {
        const response = await axios.post('http://localhost:3000/voucher', {
        clientCpf: clientCpf
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
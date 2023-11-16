import axios from "axios";

export async function getVoucher(clientCpf: string): Promise<string>{
        
        const response = await axios.post('http://localhost:3000/voucher', {
            clientCpf: clientCpf
        }).catch(error => {
            return error.message;
        });
        return response.data;
        }
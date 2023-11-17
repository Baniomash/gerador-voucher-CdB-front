import { getVoucher } from "./services/api";
import { ChangeDataProps, DataProps } from "./types";

export async function changeData(props: ChangeDataProps): Promise<string>{
    if (verifyCpf(props.cpfInput) == false) {
        return import.meta.env.VITE_INVALID_CPF;
    } else {
        const voucher = await getVoucher(props.cpfInput);
        if(voucher == import.meta.env.VITE_CPF_ERROR || voucher === undefined){
            return import.meta.env.VITE_CPF_ERROR;
        }
        let data: DataProps = { cpf: props.cpfInput, voucher: voucher, done: true };
        props.setData(data);
        return import.meta.env.VITE_CPF_FINISH;
    }
}

export function verifyCpf(cpfInput: string) {
    if (typeof cpfInput !== "string") {
        return false
    }
    cpfInput = cpfInput.replace(/[\s.-]*/igm, '')
    if (cpfInput.length !== 11 || !Array.from(cpfInput).filter(e => e !== cpfInput[0]).length) {
        return false;
    }
    var sum = 0;
    var rest;
    for (var i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpfInput.substring(i - 1, i)) * (11 - i);
    }
    rest = (sum * 10) % 11
    if ((rest == 10) || (rest == 11)) {
        rest = 0;
    }
    if (rest != parseInt(cpfInput.substring(9, 10))) {
        return false;
    }
    sum = 0;
    for (var i = 1; i <= 10; i++) {
        sum = sum + parseInt(cpfInput.substring(i - 1, i)) * (12 - i);
    }
    rest = (sum * 10) % 11;
    if ((rest == 10) || (rest == 11)) {
        rest = 0;
    }
    if (rest != parseInt(cpfInput.substring(10, 11))) {
        return false;
    }
    return true;
}

export function copyVoucher(voucher: string | number) {
    navigator.clipboard.writeText(voucher.toString());
}
import { ChangeDataProps, DataProps } from "./types";

export function changeData(props: ChangeDataProps) {
    if (verifyCpf(props.cpfInput) == false) {
        return 'CPF Inválido';
    } else {
        // código para receber o voucher da API
        let data: DataProps = { cpf: props.cpfInput, voucher: 2384577384153539, done: true };
        props.setData(data);
        return 'Finalizado';
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
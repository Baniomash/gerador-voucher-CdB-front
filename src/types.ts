export interface InputsTextsStatus {
    inputsStatus: boolean;
    erroText: string;
}

export interface ChangeDataProps {
    setData: React.Dispatch<React.SetStateAction<DataProps | undefined>>;
    cpfInput: string;
}

export interface FormSectionProps {
    cpfInput: string;
    setCpfInput: React.Dispatch<React.SetStateAction<string>>;
    setData: React.Dispatch<React.SetStateAction<DataProps | undefined>>;
    changeData: Function;
}

export interface DataProps {
    cpf: string;
    voucher: string | number;
    done: boolean;
}
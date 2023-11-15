import InputMask from 'react-input-mask';
import { FormSectionProps, InputsTextsStatus } from '../types';
import { FormEvent, useState } from 'react';


function FormSection(props: FormSectionProps) {
    const [status, setStatus] = useState<InputsTextsStatus>();
  
    function buttonStateChange(event: FormEvent) {
      event.preventDefault();
      setStatus({ inputsStatus: true, erroText: '' });
      if (props.changeData({ setData: props.setData, cpfInput: props.cpfInput }) == 'CPF Inválido') {
        setStatus({ inputsStatus: false, erroText: 'CPF Inválido' });
      }
    }
  
    return (
      <section>
        <h1 className='title'>ENTRE COM O SEU CPF PARA GERAR SEU CASHBACK</h1>
        <h2 className='subtitle'>No clube da Jota suas compras valem vouchers que valem pontos. Cadastre-se Grátis e veja quais são os produtos disponíveis para trocar por pontos. Consulte os termos de uso da promoção.</h2>
        <form onSubmit={buttonStateChange}>
          <p className='erroMsg'>{status?.erroText}</p>
          <InputMask
            className='input'
            mask="999.999.999-99"
            maskChar=""
            placeholder="digite aqui seu CPF"
            type="text"
            value={props.cpfInput}
            onChange={(e) => props.setCpfInput(e.target.value)}
            disabled={status?.inputsStatus}
          />
          <button className='button' type="submit" disabled={status?.inputsStatus}>GERAR VOUCHER</button>
        </form>
        <p className='info'>Não utilizamos os seus dados para nenhum fim além da
          geração do voucher de participação.</p>
      </section>
    );
  }

export default FormSection;
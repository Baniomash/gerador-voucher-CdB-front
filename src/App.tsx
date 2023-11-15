import { useState, FormEvent } from 'react'
import InputMask from 'react-input-mask';
import './App.css'

import imageLoja from './assets/image.png'

function FormSection(props: FormSectionProps) {
  const [status, setStatus] = useState<InputsTextsStatus>();
  
  function buttonStateChange(event: FormEvent){
    event.preventDefault();
    setStatus({inputsStatus: true, erroText: ''});
    if(changeData({setData: props.setData, cpfInput: props.cpfInput}) == 'CPF Inválido'){
      setStatus({inputsStatus: false, erroText: 'CPF Inválido'});
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
      onChange={(e)=> props.setCpfInput(e.target.value)}
      disabled={status?.inputsStatus}
      />
      <button className='button' type="submit" disabled={status?.inputsStatus}>GERAR VOUCHER</button>
    </form>
    <p className='info'>Não utilizamos os seus dados para nenhum fim além da
    geração do voucher de participação.</p>
  </section>
  );
}

function ResultSection(){
  return (
    <section>
      <h1 className='title'>COPIE ESSE NÚMERO E USE NO CLUBE DA JOTA</h1>
      <input className='input' value={2384577384153539} disabled/>
      <button className='button' type="submit">COPIAR CÓDIGO</button>
      <p className='info'>ACESSE O SEU <a href="#">CLUBE AQUI</a></p>
    </section>
  );
}

function changeData(props: ChangeDataProps){
  if(verifyCpf(props.cpfInput) == false){
    return 'CPF Inválido';
  }else{
    // código para receber o voucher da API
    let data: DataProps = {cpf: props.cpfInput, voucher: 2384577384153539, done: true};
    props.setData(data);
    return 'Finalizado';
  }
}

function verifyCpf(cpfInput: string){
  if (typeof cpfInput !== "string"){
    return false
  }
  cpfInput = cpfInput.replace(/[\s.-]*/igm, '')
  if (cpfInput.length !== 11 || !Array.from(cpfInput).filter(e => e !== cpfInput[0]).length) {
    return false;
  }
  var sum = 0;
  var rest;
  for (var i = 1; i <= 9; i++){
    sum = sum + parseInt(cpfInput.substring(i-1, i)) * (11 - i);
  }
  rest = (sum * 10) % 11
  if ((rest == 10) || (rest == 11)){
    rest = 0;
  }
  if (rest != parseInt(cpfInput.substring(9, 10))){
    return false;
  }
  sum = 0;
  for (var i = 1; i <= 10; i++){ 
    sum = sum + parseInt(cpfInput.substring(i-1, i)) * (12 - i);
  }
  rest = (sum * 10) % 11;
  if ((rest == 10) || (rest == 11)){
    rest = 0;
  }
  if (rest != parseInt(cpfInput.substring(10, 11) )){
    return false;
  }
  return true;
}

interface InputsTextsStatus{
  inputsStatus: boolean;
  erroText: string;
}

interface ChangeDataProps{
  setData: React.Dispatch<React.SetStateAction<DataProps | undefined>>;
  cpfInput: string;
}

interface FormSectionProps{
  cpfInput: string;
  setCpfInput: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<DataProps | undefined>>;
  changeData: Function;
}

interface DataProps{
  cpf: string;
  voucher: string | number;
  done: boolean;
}

function App() {
  const [cpfInput, setCpfInput] = useState('');
  const [data, setData] = useState<DataProps>();

  return (
    <div>
      <main className='container'>
        <img className="image" src={imageLoja} alt="imagem da loja"/>
        {data?.done?<ResultSection/>
        :<FormSection changeData={changeData} cpfInput={cpfInput} setCpfInput={setCpfInput} setData={setData}/>}
      </main>
    </div>
  )
}


export default App

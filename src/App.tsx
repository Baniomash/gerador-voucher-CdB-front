import { useState, FormEvent } from 'react'
import InputMask from 'react-input-mask';
import './App.css'

import imageLoja from './assets/image.png'

function FormSection() {
  return (
  <section>
    <h1 className='title'>ENTRE COM O SEU CPF PARA GERAR SEU CASHBACK</h1>
    <h2 className='subtitle'>No clube da Jota suas compras valem vouchers que valem pontos. Cadastre-se Grátis e veja quais são os produtos disponíveis para trocar por pontos. Consulte os termos de uso da promoção.</h2>
    <form>
      <InputMask
      className='input'
      mask="999.999.999-99"
      maskChar=""
      placeholder="digite aqui seu CPF"
      type="text"
      />
      <button className='button' type="submit" >GERAR VOUCHER</button>
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
        <FormSection />
        <ResultSection/>
      </main>
    </div>
  )
}


export default App

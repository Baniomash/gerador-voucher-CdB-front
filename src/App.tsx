import { useState } from 'react'
import './App.css'
import imageLoja from './assets/image.jpeg'
import FormSection from './components/FormSection';
import ResultSection from './components/ResultSection';
import { DataProps } from './types';
import { changeData } from './utils';

function App() {
  const [cpfInput, setCpfInput] = useState('');
  const [data, setData] = useState<DataProps>();

  return (
    <div>
      <main className='container'>
        <img className="image" src={imageLoja} alt="imagem da loja" />
        {data?.done ? <ResultSection voucher={data.voucher}/>
          : <FormSection changeData={changeData} cpfInput={cpfInput} setCpfInput={setCpfInput} setData={setData} />}
      </main>
    </div>
  )
}


export default App

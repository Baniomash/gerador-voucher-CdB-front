import Vector from '../assets/Vector.png'
import { copyVoucher } from '../utils';

function ResultSection({voucher}:{voucher: string | number}) {
    return (
      <section>
        <h1 className='title'>COPIE ESSE NÚMERO E USE NO CLUBE DA JOTA</h1>
        <input className='resultInput' value={voucher} disabled />
        <button className='button' onClick={()=>copyVoucher(voucher)}><img src={Vector} alt='copy'></img>COPIAR CÓDIGO</button>
        <p className='info'>ACESSE O SEU <a href="https://clubedajota.com.br/">CLUBE AQUI</a></p>
      </section>
    );
  }

export default ResultSection;
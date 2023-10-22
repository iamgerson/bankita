import { Container } from "./Container";

import Image from "next/image";
import PhoneIcon from '@/assets/icon-phone.svg'

interface Props{}

export function SectionServices(){
  return(
    <section className="w-full h-[965px] pt-32">
      <Container>
        <div className="flex-1 max-w-[594px]">
          <span className="block text-primary-orange text-sm font-bold uppercase mb-9">Serviços exclusivos</span>
          <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h2>
          <p className="text-lg max-w-[554px] mb-16 text-second-gray">Veja como você pode cuidar das suas finanças pelo app Bankita de forma segura, rápida e o melhor, no conforto da sua casa.</p>
          <ul>
            <li className="flex items-center gap-10 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={PhoneIcon} alt="Phone Icon"/>
              </div>
              <p>Acompanhar sua conta, fazer transferências e pagamentos de onde estiver</p>
            </li>
            
          </ul>
        </div>
      </Container>
    </section>
  )
}
import { Container } from "./Container";

import Image from "next/image";
import ImgAppleStore from "@/assets/btn-apple-store.svg"
import ImgGooglePlay from "@/assets/btn-google-play.svg"
import Arrow from '@/assets/arrow-explorer.svg'

import womanImage from '@/assets/woman.png'

export function SectionHero(){
  return(
    <section className="w-full h-[704px]  bg-img_bg_hero bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="flex-1 max-w-[500px]">
          <h1 className="text-white text-6xl font-bold mb-4">Tenha seu banco na palma da mão.</h1>
          <p className="text-xl text-white max-w-[408px] mb-8">Todas as operações que você precisa em um só lugar. Simples completo e feito para você.
          </p>
          <div className="flex gap-4 mb-14">
            <button>
              <Image src={ImgAppleStore} alt="Apple Store"/>
            </button>
            <button>
              <Image src={ImgGooglePlay} alt="Google Play"/>
            </button>
          </div>
          <button className="flex items-center gap-3">
            <Image src={Arrow} alt="Arrow down"/>
            <span className="text-white text-sm font-bold">Continue explorando</span>
          </button>
        </div>
        <Image src={womanImage} alt="Woman holding a phone" className="mr-[-41px]"/>
      </Container>
    </section>
  )
}
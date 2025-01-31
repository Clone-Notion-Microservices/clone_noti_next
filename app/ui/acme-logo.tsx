import { lusitana } from '@/app/ui/fonts';
import Image from "next/image";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/*<GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />*/}
      {/*<p className="text-[44px]">Acme</p>*/}
      <Image src={'/inlaze.png'} className="rounded-full"
             alt='InLaze'
             width={640}
             height={200}></Image>
    </div>
  );
}

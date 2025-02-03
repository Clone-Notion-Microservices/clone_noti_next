import AppLogo from '@/app/ui/app-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AppLogo /> */}
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Bienvenido.</strong> Esta es una demostración con Next.js y NestJS usando una arquitectura de microservicios.{' '}
            <a href="https://github.com/orgs/Clone-Notion-Microservices/repositories" className="text-blue-400">
              Repositorio
            </a>
            , realizado por Ruben Santis.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6"/>
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/*<Image src="/hero-desktop.png" alt="Screnshot" width={1000} height={760} className="hidden md:block"/>*/}
          {/*<Image src="/hero-mobile.png" alt="Screnshot" width={520} height={620} className="block md:hidden"/>*/}

          {/*<div data-controller="blocks--cover--re-render-video">*/}
          {/*  <video className="inset-0 object-cover h-full w-full "*/}
          {/*         data-blocks--cover--re-render-video-target="videoElement" loop="loop" muted="muted" autoPlay="autoplay"*/}
          {/*         playsInline="playsinline">*/}
          {/*    <source*/}
          {/*      src="https://videos.teamtailor-cdn.com/teamtailor-na-maroon-videos/uploads_converted/cover_large/3b0a0fa42e045dba3c68963c2af57e677c571444.mp4"*/}
          {/*      type="video/mp4"/>*/}
          {/*    <source*/}
          {/*      src="https://videos.teamtailor-cdn.com/teamtailor-na-maroon-videos/uploads_converted/cover_large/3b0a0fa42e045dba3c68963c2af57e677c571444.webm"*/}
          {/*      type="video/webm"/>*/}
          {/*  </video>*/}
          {/*</div>*/}
        </div>
      </div>

      {/*rgba(var(--company-button-bg-color),var(--tw-bg-opacity,1))*/}

    </main>
  );
}

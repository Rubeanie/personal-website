import { Age } from '@/utils/common';
import dynamic from 'next/dynamic';

const Canvas = dynamic(() => import('../components/HeroCanvas'), { ssr: false })

export const metadata = {
  title: 'Home | Ruben Panzich',
  description:
    "I'm Ruben Panzich, I am a Freelance creative developer, with qualifications in game design and development."
};

export default function Home() {
  return (
    <div className='page'>
      <Canvas />
      <div
        className='hero-no-padding'>
        <div className='column'>
          <div className='layer'>
            <div className='column'>
              <h1 className='img-heading'>
                Ruben
                <br />
                Panzich
              </h1>
              <p>
                <Age />
                -year-old student
                <br />
                freelance creative artist/developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

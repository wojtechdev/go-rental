import Autoplay from 'embla-carousel-autoplay';

import { Card } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { useRef } from 'react';

export function CarImagesSlider() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className='w-full px-4'>
      <Carousel plugins={[plugin.current]} className='mx-5' onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          <CarouselItem>
            <div className='h-full w-full flex justify-center items-center'>
              <Card>
                <img src={'/images/default_car.png'} alt='Car' className='object-cover rounded-lg' />
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

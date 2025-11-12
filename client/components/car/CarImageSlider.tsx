import Autoplay from 'embla-carousel-autoplay';

import { Card } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { useRef } from 'react';
import Image from 'next/image';

interface ICarImagesSliderProps {
  images?: Array<{ public_id: string; url: string }>;
}

export function CarImagesSlider({ images }: ICarImagesSliderProps) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className='w-full px-4'>
      <Carousel plugins={[plugin.current]} className='mx-5' onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {images?.length === 0 ? (
            <Image src='/images/default_car.png' alt='No images available' className='object-cover rounded-lg' width={500} height={300} />
          ) : (
            images?.map((image) => (
              <CarouselItem key={image.public_id}>
                <div className='h-full w-full flex justify-center items-center'>
                  <Card>
                    <Image src={image.url} alt='Car' className='object-cover rounded-lg' width={500} height={300} />
                  </Card>
                </div>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

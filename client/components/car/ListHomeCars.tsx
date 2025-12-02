import { CardHeader, CardTitle } from '../ui/card';
import { ArrowLeftRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import CardItem from './CarItem';
import { ICar } from '@go-rental/shared';
import LoadingSpinner from '../layout/LoadingSpinner';

interface IListHomeCarsProps {
  cars: Array<ICar> | undefined;
  loading: boolean;
}

const ListHomeCars = ({ cars, loading }: IListHomeCarsProps) => {
  if (loading) {
    return <LoadingSpinner size={60} fullScreen={true} />;
  }

  return (
    <>
      <CardHeader className='p-0'>
        <CardTitle className='group flex items-center text-2xl p-0'>Rent Car for Your Next Trip</CardTitle>
        <div className='flex'>
          <Link href='/search' className='inline-block'>
            <Button variant='ghost' className='px-1 '>
              <ArrowLeftRight className='h-4 w-4 me-1' />
              Search cars within location/budget/dates
            </Button>
          </Link>
        </div>
      </CardHeader>
      <div className='text-sm text-muted-foreground'>
        {cars?.map((car: ICar) => (
          <CardItem key={car.id} car={car} />
        ))}
      </div>
    </>
  );
};

export default ListHomeCars;

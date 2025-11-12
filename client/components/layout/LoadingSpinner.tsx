import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';

interface ILoadingSpinnerProps {
  size?: number;
  className?: string;
  fullScreen?: boolean;
}

const LoadingSpinner = ({ size = 20, className, fullScreen = false }: ILoadingSpinnerProps) => {
  const spinner = <LoaderCircle className={cn('animate-spin', className)} size={size} />;

  if (fullScreen) {
    return <div className='flex justify-center items-center h-screen'>{spinner}</div>;
  }

  return spinner;
};

export default LoadingSpinner;

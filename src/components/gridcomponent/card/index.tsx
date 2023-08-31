import { ImageSource } from '../../../constants/globals'
import { IconType } from '@/app/constants/types';

const Card = ({ icon, name }: { icon: IconType, name: string }) => {
    console.log(icon);

    return <h1>{name}</h1>
};

export default Card;

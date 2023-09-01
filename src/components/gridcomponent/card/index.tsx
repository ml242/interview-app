import { IconType } from "../../../constants/types";

const Card = ({ icon, name }: { icon: IconType; name: string }) => {
  console.log("");
  return <h1>{name}</h1>;
};

export default Card;

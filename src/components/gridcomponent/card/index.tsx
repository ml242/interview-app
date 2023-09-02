import { IconType } from "../../../constants/types";

const Card = ({ icon, name }: { icon: IconType; name: string }) => {
  console.log("");
  return <div>{name}</div>;
};

export default Card;

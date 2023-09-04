import { useNavigate } from "react-router-dom";
import { ProductsType } from "../../constants/types";
import { ImageSource } from "../../constants/globals";

export default function Page({ products }: { products: ProductsType }) {
  const navigate = useNavigate();
  const listItems = products.map((item) => {
    return (
      <tr
        key={item.id}
        className='h-[20px] text-[#00000073] text-[14px] border-[0] border-b border-solid hover:bg-gray-50'
      >
        <td>
          <img
            className='basis-2/10'
            src={`${ImageSource}${item.icon.id}_${item.icon.resolutions[0][0]}x${item.icon.resolutions[0][1]}.png`}
          />
        </td>
        <td onClick={() => navigate(`/product/${item.id}`)}>
          {item.line.name}
        </td>
        <td onClick={() => navigate(`/product/${item.id}`)}>
          {item.product.name}
        </td>
      </tr>
    );
  });

  return (
    <table className='table-fixed w-full'>
      <thead className=''>
        <tr className='sticky top-0 bg-white'>
          <th className='w-1/12'></th>
          <th className='w-5/11 text-left text-[#000000d9] text-[14px]'>
            Line
          </th>
          <th className='w-5/11 text-left text-[#000000d9] text-[14px]'>
            Name
          </th>
        </tr>
      </thead>
      <tbody className=''>{listItems}</tbody>
    </table>
  );
}

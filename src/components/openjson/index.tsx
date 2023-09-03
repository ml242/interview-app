import { Product } from "../../constants/types";

const OpenJson = ({ data }: { data: Product }) => {
  const displayJSON = () => {
    const jsonData = JSON.stringify(data, null, 2);
    const newWindow = window.open("", "_blank");
    const jsonContainer = document.createElement("div");
    jsonContainer.innerHTML = `<pre>${jsonData}</pre>`;
    newWindow?.document.body.appendChild(jsonContainer);
  };

  return <button onClick={displayJSON}>See All Details as JSON</button>;
};

export default OpenJson;

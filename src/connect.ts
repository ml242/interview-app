import { useLocation } from "react-router-dom";

const useConnect = () => {
    const { pathname, search } = useLocation();
  
    return {
      pathname,
      viewType: new URLSearchParams(search).get("display"),
    };
};

export default useConnect;
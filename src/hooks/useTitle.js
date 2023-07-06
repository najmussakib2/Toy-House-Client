import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `ToyHouse | ${title}`;
  }, [title]);
};

export default useTitle;

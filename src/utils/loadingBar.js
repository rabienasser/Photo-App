import { useEffect } from "react";

const useLoadingBar = (isLoading, loadingBar) => {
   useEffect(() => {
      if (isLoading) {
         loadingBar.current.continuousStart();
      } else {
         loadingBar.current.complete();
      }
   }, [isLoading]);
};

export default useLoadingBar;

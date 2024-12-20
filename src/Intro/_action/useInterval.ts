import { useEffect, useRef } from "react";

export function useInterval(callback : any, delay: number){
    const savedCallback = useRef<any>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick(){
            savedCallback.current();
        }
        if(delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
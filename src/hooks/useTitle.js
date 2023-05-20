import { useEffect } from "react"

const useTitle = (title) => {
    useEffect( ()=> {
        document.title = `TenJoy | ${title}`;
    } , [title])
}

export default useTitle;
import { useEffect } from "react"

const useTitles = (title) => {

    useEffect(()=>{
        window.document.title = `${title} - Flashback - Online Camera Shop`
    }, [title])
  
}

export default useTitles
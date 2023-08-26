import { useState } from "react";

export const useFetch = () => {
    const [breeds, setBreeds] = useState<any>([])
    fetch('https://api.thecatapi.com/v1/breeds?limit=15', {
          headers: {
            'x-api-key': 'live_IvsY9IWZY2HevmQgUSlWy0ewC7J8szAIw2I0NWsSBkZ0TWuRyspIvq92umxAziyE'
          }
        }).then(response => response.json().then(data =>({
                data: setBreeds(data),
                status: response.status
    })))
}



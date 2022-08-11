const URL = 'https://www.etnassoft.com/api/v1/get/';

// devuelve los primeros 25 libros
export function getBooks () {

    try {
        return fetch(URL+'?num_items=25').then(response => {
            let data =  response.json();
            return data;
        })
    } catch (error) {
        console.log(error);
    }
}



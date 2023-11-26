export const addToFav = (product) =>{
    return {
        type : "ADDTOFAV",
        payload: product
    }
}

export const removeToFav = (id) =>{

    return {
        type : "REMOVETOFAV",
        payload: id
    }
}

export const addToCart = (product) =>{
    return {
        type : "ADDTOCART",
        payload: product
    }
}

export const removeToCart = (id) =>{
    return {
        type : "REMOVETOCART",
        payload: id
    }
}




let cartStore = []


export const cartProductReducer = (state = cartStore, action) => {

    if (action.type === "ADDTOCART") {

        const filterArr = state.filter(p => {
            return p.id != action.payload.id
        })
        filterArr.push(action.payload)
        state = [...filterArr]

    }else if(action.type === "REMOVETOCART"){
      
        const filterArr  = state.filter((val) => {
            return val.id != action.payload
        })
        
        state = [...filterArr]

    }

    return state
}   
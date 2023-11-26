
let favStore = []


export const favProductReducer = (state = favStore,action) =>{
   
    if(action.type === "ADDTOFAV"){
       
        const filterArr =  state.filter(p=>{
            return p.id != action.payload.id
        })
       filterArr.push(action.payload)
       state = [...filterArr]

    }else if(action.type === "REMOVETOFAV"){
      
        const filterArr  = state.filter((val) => {
            return val.id != action.payload
        })
        
        state = [...filterArr]

    }

    return state
}   
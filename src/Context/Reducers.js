
export const Reducer=(state,action)=>{
    switch(action.type){
            case 'ADD_USER':
                return {
                    data:[...state.data,action.payload]
                };

            case 'DELETE_USER':
                return {
                    data:state.data.filter((data)=>data.id!==action.payload)
                };

                case 'UPDATE_USER':
                const updateData=action.payload;
                const updateDatas=state.data.map((ele)=>{
                    if(ele.id===updateData.id){
                        return updateData;
                    }
                    return ele;
                })
                return {data:updateDatas}

                case "DELETE_ALL_USER":
                   return {
                       data:[]
                    }
                
        default:
            
            return state;
    }
}
export default function reducer(state = {List: [] },action)
    {
        switch(action.type)
        {
            case 'LIST_ADD':
            {
                var newlist={
                    name:action.payload,
                    id:Date.now(),
                    completed: false
                }
                 return {...state, List: [...state.List, newlist]};
            }
    
            case 'LIST_DELETE':
            {
                
                var arr=state.List.filter(function(listI){return !matchesID(listI);})
                function matchesID(listI) {
                     return listI.id === action.payload;
                }


    
               return {...state, List: arr};
            }
    
             case 'LIST_EDIT':
             {
                // var index=state.List.findIndex((listI)=>listI.id==action.payload);
                // return {...state};
             }
            default:
            return state;
        }
    }
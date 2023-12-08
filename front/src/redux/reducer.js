
const inicialState = {
    passeger: [],
    allpasseger: [],
    detail: [],
    post: [],
    user: [],
    posibleUser: [],
    getPosible: [],




}
const reducer = (state = inicialState, actions) => {
    switch (actions.type) {
        case 'all':
            return { ...state, passeger: actions.payload, allpasseger: actions.payload }

        case 'post':
            return { ...state, post: actions.payload }

        case 'findName':

            return { ...state, passeger: actions.payload }


        case 'detail':
            return { ...state, detail: actions.payload }

        case 'put':
            return { ...state, detail: actions.payload }

        case 'close':
            return { ...state, passeger: [] }

        case 'delete':
         
            return { ...state };

        case 'register':
            return { ...state }

        case 'allPosible':
            return { ...state, posibleUser: actions.payload }

        case 'confir':
            return { ...state, user: actions.payload }

        case 'getPosible':
            return { ...state, getPosible: actions.payload }

        case 'user':
            const posible = state.posibleUser.filter(user => user.ud !== actions.payload)
            return { ...state, posibleUser: posible }
        case 'token':
            return { ...state, token: actions.payload }
        default:
            return state
    }
}



export default reducer

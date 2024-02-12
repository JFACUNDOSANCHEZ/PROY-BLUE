
const inicialState = {
    passeger: [],
    noEncontrado: false,
    allpasseger: [],
    detail: [],
    post: [],
    user: [],
    posibleUser: [],
    getPosible: [],
    users: [],
    token: null,
 codigo: ''




}
const reducer = (state = inicialState, actions) => {
    switch (actions.type) {
        case 'borrarToken':
            return { ...state, token: [] }

        case 'all':
            return { ...state, passeger: actions.payload, allpasseger: actions.payload }
        case 'findNUserName':
            return { ...state, users: actions.payload, allpasseger: actions.payload }


        case 'userID':
            return { ...state, user: actions.payload }
        case 'post':
            return { ...state, post: actions.payload }




        case 'guardarToken':
            return { ...state, token: actions.payload }




        case 'findName':
            console.log(actions.payload.found);
            return {
                ...state,
                passeger: actions.payload.data,
                noEncontrado: actions.payload.found, // Actualiza el estado de noEncontrado
            };
        case 'userPut':
            return { ...state, user: actions.payload }

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

        case 'confirm':
            return { ...state, codigo: actions.payload }

        case 'getPosible':
            return { ...state, getPosible: actions.payload }



        case 'users':
            return { ...state, users: actions.payload }
        case 'token':
            return { ...state, token: actions.payload.token }
        default:
            return state
    }
}



export default reducer

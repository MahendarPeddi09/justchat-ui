const initialState = {
    userSession : {userloggedIn : false,name:'',userId:0},
    chatDetails : {},
    recentChats : {},
}

const chatwindowReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHAT_WINDOW_LAUNCHED':
            return {...state, chatDetails : {...state.chatDetails, chatwindowDetails : action.payload,iswindowActive : true}}
        case 'DOWNLOADED_CHATS':
            console.log(action.id)
            let newState = {...state}
             
            //let recentChats = state.recentChats;//[{name:'Mahendar',id:10},{name:'Mahendar2',id:12},]
            let name = action.id;
            let pay = action.payload['chats'];
            newState.recentChats[[name]] = action.payload['chats']
            console.log((newState.recentChats[[name]]).length,action.payload['chats'].length)
            return {...state,recentChats:{...state.recentChats,[name]: [action.payload['chats']]}}
        case 'UPDATE_USERSESSION':
            
            return {...state,userSession:{...state.userSession,userloggedIn:action.loggedin,name:action.name,userId:action.id,}}
        default:
            return  state
    }

   }
   export default  chatwindowReducer;
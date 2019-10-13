

export const chatwindowLaunch = (details) => {

    return {
     type: 'CHAT_WINDOW_LAUNCHED',
     payload: details
    }
   }
export const saveChats = (id,chats) => {
    //console.log(id,chats)
    return{
     type: 'DOWNLOADED_CHATS',
     id : id,
     payload: {chats}
    }
   }
export const updateUserSession = (loggedin,name,id) =>{
    console.log(loggedin,name,id)
    return{
        type: 'UPDATE_USERSESSION',
        loggedin:loggedin,
        name:name,
        id:id,
    }
}
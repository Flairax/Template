export const enterAsAdmin = (password) => {
   return {
      type: "ENTER_ADMIN_MODE",
      payload: password
   }

}

export const quitAdmin = () => {
   return {
      type: "QUIT_ADMIN_MODE"
   }
}
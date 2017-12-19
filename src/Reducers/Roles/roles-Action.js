export const login = (user) => {
   return {
      type: "LOGIN",
      payload: user,
   }
}

export const exit = () => {
   return {
      type: "EXIT"
   }
}
const initialState = {
   name: "User",
   accesability: false,
   passwordValidation: true,
};

const adminPassword = "1111";

const roles = (state = initialState, action) => {
   switch (action.type) {
      case "ENTER_ADMIN_MODE": {
         if (action.payload === adminPassword){
            return {
               name: "Admin",
               accesability: true,
               passwordValidation: true,
            }
         }else{
            return {
               name: "User",
               accesability: false,
               passwordValidation: false,
            }
         }
      }

      case "QUIT_ADMIN_MODE":
         return {
            name: "User",
            accesability: false,
            passwordValidation: true,
         }

      default:
         return state;
   }
}

export default roles;
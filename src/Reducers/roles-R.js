const initialState = {
   name: "User",
   accesability: false,
};

const adminPassword = "1111";

const roles = (state = initialState, action) => {
   switch (action.type) {
      case "ENTER_ADMIN_MODE": {
         if (action.payload === adminPassword) return {
            name: "Admin",
            accesability: true,
         }
         return state;
      }

      case "QUIT_ADMIN_MODE":
         return {
            name: "User",
            accesability: false,
         }

      default:
         return state;
   }
}

export default roles;
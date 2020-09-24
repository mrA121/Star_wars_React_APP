
export const signIn = (userName) => {
    return { type: "LOGIN_SUCCESS", userName };
  };
  
  export const signOut = () => {
    return { type: "LOGOUT_SUCCESS" };
  };
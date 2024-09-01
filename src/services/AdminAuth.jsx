
export const loginAdmin = async () => {
  try {
    const session = await account.createSession(import.meta.env.VITE_ADMIN_ID, import.meta.env.VITE_ADMIN_PASSWORD);
    return session;
  } catch (error) {
    console.error("Admin login failed:", error);
  }
};


export const isAdmin =  (data)=>{
  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_ID;
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  if (data.email === ADMIN_EMAIL && data.password === ADMIN_PASSWORD) {
      return true;
  } else {
      return false;
  }
}

  
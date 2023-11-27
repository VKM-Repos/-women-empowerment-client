type AccessToken = string | null;

export const storeToken = (accessToken: AccessToken): void => {
  try {
    if (!accessToken || typeof window === 'undefined') {
      return;
    }

    localStorage.setItem('authToken', accessToken);
    console.log('Token stored successfully');
  } catch (error) {
    console.error('Error storing token:', error);
    throw new Error('Token storage failed');
  }
};

export const getStoredToken = (): AccessToken => {
  try {
    if (typeof window === 'undefined') {
      return null;
    }

    const accessToken = localStorage.getItem('authToken');
    return accessToken ? accessToken : null;
  } catch (error) {
    console.error('Error retrieving token:', error);
    throw new Error('Token retrieval failed');
  }
};

export const removeToken = (): void => {
  try {
    if (typeof window === 'undefined') {
      return;
    }

    localStorage.removeItem('authToken');
    console.log('Token removed successfully');
  } catch (error) {
    console.error('Error removing token:', error);
    throw new Error('Token removal failed');
  }
};



export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  const authToken = localStorage.getItem('authToken');
  return Boolean(authToken);
};

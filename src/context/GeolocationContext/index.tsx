import React, { createContext, useEffect, useState } from 'react';

export interface GeolocationContextValue {
  geolocation: boolean;
}

const BlockedRegions = ['US', 'CU', 'IR', 'RU', 'SR', 'KP'];

const GeolocationContext = createContext<GeolocationContextValue>({geolocation: false});

const GeolocationProvider: React.FC = ({ children }) => {
  const [geolocation, setGeolocation] = useState(false);

  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        const response = await fetch('https://api.myip.com');
        const { cc } = await response.json();
        setGeolocation(BlockedRegions.includes(cc));
      } catch (error) {
        console.error('Error fetching geolocation:', error);
      }
    };

    fetchGeolocation();
  }, []);

  return (
    <GeolocationContext.Provider value={{geolocation}}>
      {children}
    </GeolocationContext.Provider>
  );
};

export { GeolocationContext, GeolocationProvider };

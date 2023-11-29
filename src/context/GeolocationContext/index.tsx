import React, { createContext, useEffect, useState } from "react";

export interface GeolocationContextValue {
  geolocation: boolean;
}

const BlockedRegions = ["US", "CU", "IR", "RU", "SR", "KP"];

const GeolocationContext = createContext<GeolocationContextValue>({
  geolocation: false,
});

const GeolocationProvider: React.FC = ({ children }) => {
  const [geolocation, setGeolocation] = useState(false);

  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        const response = await fetch(`https://pro.ip-api.com/json?key=${import.meta.env.VITE_FF_IPAPI_KEY}`);
        const { countryCode } = await response.json();
        setGeolocation(BlockedRegions.includes(countryCode));
      } catch (error) {
        console.error("Error fetching geolocation:", error);
      }
    };

    fetchGeolocation();
  }, []);

  return (
    <GeolocationContext.Provider value={{ geolocation }}>
      {children}
    </GeolocationContext.Provider>
  );
};

export { GeolocationContext, GeolocationProvider };

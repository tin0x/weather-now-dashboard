export const getCoordinates = () => {
  return new Promise((resolve, reject) => {
    if (!window.navigator.geolocation) {
      reject(new Error('Geolocation is not supported by the browser.'));
    }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      },
    );
  });
};

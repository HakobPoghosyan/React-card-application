export const getRandomInt = () => {
  const num = 999;
  return Math.floor(Math.random() * num);
};

export const createUUID = () => {
  let randomId;
  let dt = new Date().getTime();
  let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (randomId = (c) => {
      let r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    })
  );
  return uuid;
};

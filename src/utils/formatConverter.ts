const formatConverter = (avatar: string) => {
  if (avatar) {
    const splitEcndode = avatar.split(",");
    const decodedString = splitEcndode[0]?.split(";")[0]?.split("/")[1];
    const buffer = Buffer.from(avatar.substring(avatar.indexOf(",") + 1));
    const size = (buffer.length / 1e6).toFixed(2);

    const decodedInfo = {
      size: size + " MB",
      type: decodedString,
      img: splitEcndode[0],
    };
    return decodedInfo;
  }
  return "";
};

export default formatConverter;

import type { IDoc } from "../pages/components/Mail/interfaces";

const formatAttachments = (docs: IDoc | undefined) => {
  if (docs) {
    const arrayLength = Object.entries(docs).length;
    if (arrayLength !== 0) {
      if (arrayLength === 1) {
        return `${arrayLength} файл`;
      } else if (arrayLength > 1 && arrayLength < 5) {
        return `${arrayLength} файлa`;
      } else if (arrayLength > 5) {
        return `${arrayLength} файлов`;
      }
    } else {
      return "";
    }
  } else {
    return "";
  }
};

export default formatAttachments;

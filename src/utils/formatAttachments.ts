import type { IDoc } from "../app/components/Mail/interfaces";

const formatAttachments = (docs: IDoc) => {
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
};

export default formatAttachments;

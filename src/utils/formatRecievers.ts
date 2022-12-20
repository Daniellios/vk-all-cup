import type { IReciever } from "../pages/components/Mail/interfaces";

const formatRecievers = (recievers: IReciever[]) => {
  const recieversAmount = recievers.length;

  let res = "";

  const cutRecievers = recievers.splice(0, 2).map((reciever, idx) => {
    if (idx === 2) {
      return `${reciever.name} ${reciever.surname}`;
    } else {
      return `${reciever.name} ${reciever.surname}`;
    }
  });
  if (recieversAmount > 1) {
    res = `${recieversAmount} получателей: Вы, ${cutRecievers}`;
    return res;
  } else {
    res = `1 получатель: Вы`;
    return res;
  }
};

export default formatRecievers;

import type { IReciever } from "../app/components/Mail/interfaces";

const formatRecievers = (recievers: IReciever[]) => {
  const recieversAmount = recievers.length;

  const cutRecievers = recievers.splice(0, 2).map((reciever, idx) => {
    if (idx === 2) {
      return `${reciever.name} ${reciever.surname}`;
    } else {
      return `${reciever.name} ${reciever.surname}`;
    }
  });
  const resText = `${recieversAmount} получателей: Вы, ${cutRecievers}`;
  return resText;
};

export default formatRecievers;

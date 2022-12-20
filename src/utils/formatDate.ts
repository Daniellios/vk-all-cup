import { format, isEqual } from "date-fns";

import { ru } from "date-fns/locale";

const fromatDate = (dateString: string) => {
  const today = new Date();
  const time = new Date(dateString);

  const isToday = isEqual(today, time);

  const monthName = format(time, "LLLL", { locale: ru }).substring(0, 3);
  const monthDate = time.getDate();

  if (isToday) {
    const min = time.getMinutes();
    const hours = time.getHours();
    return `${hours}: ${min}`;
  } else {
    return `${monthDate}  ${monthName}`;
  }
};

export default fromatDate;

import dayjs from 'dayjs';

function isDaylightSavingTime(date: string) {
  const now = new Date(date);
  const januaryOffset = new Date(now.getFullYear(), 0, 1).getTimezoneOffset();
  const julyOffset = new Date(now.getFullYear(), 6, 1).getTimezoneOffset();
  return januaryOffset !== julyOffset;
}

export function formatDate(date: string) {
  const tzOffset = isDaylightSavingTime(date) ? '-0800' : '-0900';
  return dayjs(date + tzOffset).format('MMMM D, YYYY  HH:mm');
}

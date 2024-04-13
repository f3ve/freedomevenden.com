import dayjs from 'dayjs';

export function formatDate(date: string) {
  return dayjs(date + '-0800').format('MMMM D, YYYY');
}

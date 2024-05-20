import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseTime (time: string){
  const parsedTime = time.split(':');
  let hours = Number(parsedTime[0]);
  let minutes = Number(parsedTime[1]);
  return {
    hours,
    minutes
  }
}

export function formatDateForStorage(date: string, time: string){
  const [year, month, day] = date.split('-').map(Number);
  const [hour, minute] = time.split(':').map(Number);
  return new Date(Date.UTC(year, month - 1, day, hour, minute));
}

export function convertToLocaleDate(utcDate: Date) {
  const newDate = new Date(utcDate);
  return {
    date: newDate.toDateString(),
    time: newDate.toLocaleTimeString(),
  }
}

export function formatInputDatesDefaultValue(date: string, time: string) {
  let [newTime, meridian] = time.split(' ');
  newTime = newTime.charAt(1) === ':' ? `0${newTime}` : newTime;
  let [month, day, year] = date.split('/');
  month = month.length < 2 ? `0${month}` : month;
  const newDate = `${year}-${month}-${day}`;
  return { newDate, newTime };
}

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
  const time = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000)
  return {
    date: newDate.toDateString(),
    time: time.toLocaleTimeString(),
  }
}

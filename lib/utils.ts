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

export function formatDate(date: Date, time: string){

}

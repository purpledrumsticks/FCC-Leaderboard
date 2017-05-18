import axios from 'axios'

export const SHOW_ALL_TIME = "SHOW_ALL_TIME"
export const SHOW_RECENT = "SHOW_RECENT"


export function showAllTime() {
  const allTimeUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
  const allTimeRequest = axios.get(allTimeUrl);

  return {
    type: SHOW_ALL_TIME,
    payload: allTimeRequest
  }
}

export function showRecent() {
  const showRecentUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
  const recentRequest = axios.get(showRecentUrl);

  return {
    type: SHOW_RECENT,
    payload: recentRequest
  }
}

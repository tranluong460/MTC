import { Duration } from "moment";

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const formatTimeAgo = (duration: Duration) => {
  if (duration.asMinutes() < 1) return "Vừa xong";

  if (duration.asMinutes() < 60)
    return `${Math.floor(duration.asMinutes())} phút trước`;

  if (duration.asHours() < 24)
    return `${Math.floor(duration.asHours())} giờ trước`;

  const days = Math.floor(duration.asDays());

  if (days < 30) return `${days} ngày trước`;

  const months = Math.floor(days / 30);

  if (months < 12) return `${months} tháng trước`;

  const years = Math.floor(months / 12);

  return `${years} năm trước`;
};

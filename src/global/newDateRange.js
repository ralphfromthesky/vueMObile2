export function getTodayStartEnd() {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
  
    const firstDayOfWeek = new Date(today);
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const firstDayOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0); // Last day of previous month
  
    // Adjust first day of the week (assuming Sunday as the first day of the week)
    const dayOfWeek = today.getDay(); // 0 for Sunday, 1 for Monday, etc.
    firstDayOfWeek.setDate(today.getDate() - dayOfWeek);
  
    // Today's start and end times
    const todayStartTime = new Date(today.setHours(0, 0, 0, 0));
    const todayEndTime = new Date(today.setHours(23, 59, 59, 999));
  
    // Yesterday's start and end times
    const yesterdayStartTime = new Date(yesterday.setHours(0, 0, 0, 0));
    const yesterdayEndTime = new Date(yesterday.setHours(23, 59, 59, 999));
  
    // This week's start and end times
    const weekStartTime = new Date(firstDayOfWeek.setHours(0, 0, 0, 0));
    const weekEndTime = new Date(today.setHours(23, 59, 59, 999));
  
    // This month's start and end times
    const monthStartTime = new Date(firstDayOfMonth.setHours(0, 0, 0, 0));
    const monthEndTime = new Date(today.setHours(23, 59, 59, 999));
  
    // Last month's start and end times
    const lastMonthStartTime = new Date(firstDayOfLastMonth.setHours(0, 0, 0, 0));
    const lastMonthEndTime = new Date(lastDayOfLastMonth.setHours(23, 59, 59, 999));
  
    const formatDateTime = (date) => {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');
  
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`.replace(' ', '+');
    };
  
    return {
      todayStartTime: formatDateTime(todayStartTime),
      todayEndTime: formatDateTime(todayEndTime),
      yesterdayStartTime: formatDateTime(yesterdayStartTime),
      yesterdayEndTime: formatDateTime(yesterdayEndTime),
      weekStartTime: formatDateTime(weekStartTime),
      weekEndTime: formatDateTime(weekEndTime),
      monthStartTime: formatDateTime(monthStartTime),
      monthEndTime: formatDateTime(monthEndTime),
      lastMonthStartTime: formatDateTime(lastMonthStartTime),
      lastMonthEndTime: formatDateTime(lastMonthEndTime),
    };
  }
  
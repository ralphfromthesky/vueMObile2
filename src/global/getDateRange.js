export const getDateRange = () => {
    const today = new Date();
  
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  
    const formatDate = (date) => date.toISOString().slice(0, 19).replace('T', ' ');
  
    const startDate = formatDate(firstDayOfMonth) + "+00:00:00";
    const endDate = formatDate(today) + "+23:59:59";
  
    return { startDate, endDate };
  }

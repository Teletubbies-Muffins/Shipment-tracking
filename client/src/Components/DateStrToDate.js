const GetFullDate = (dateStr) => {
    const date = new Date(dateStr)
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
  
    const yyyy = date.getFullYear();
  
    return `${dd}-${mm}-${yyyy}`;
  }

export default GetFullDate
const convertDate = (date,format="dd.mm.yyyy") => {
  switch(format){
    case "dd.mm.yyyy":{
      const dd = String(date.getDate()).padStart(2, "0");
      const mm = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
      const yyyy = date.getFullYear();
      return dd + "." + mm + "." + yyyy;
    }
    case "russian":{
      return date.toLocaleString('ru', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  }
  
};
export default convertDate;

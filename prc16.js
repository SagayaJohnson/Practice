 const monthEl = document.getElementById("month");
 const dayEl = document.getElementById("day");
 const dateEl = document.getElementById("date");
 const yearEl = document.getElementById("year");

 const date = new Date();
   const month = date.getMonth()
   monthEl.innerText= date.toLocaleString( "en", {
    month:"long"
   })
   dayEl.innerText = date.toLocaleString ("en", {
    weekday: "long"
    })
    dateEl.innerText= date.getDate()
    yearEl.innerText= date.getFullYear()
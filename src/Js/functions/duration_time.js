export const formatDurationTime = (s) => {
    let years = Math.floor(s / 31536000);
    let months = Math.floor((s % 31536000) / 2592000);
    let days = Math.floor(((s % 31536000) % 2592000) / 86400);
    let hours = Math.floor((s % (3600 * 24)) / 3600);
    let minutes = Math.floor((s % 3600) / 60);
    let seconds = Math.floor(s % 60);

    let ans = "";
    if (years >= 1) {
      if (years > 1) ans += years + " yrs ";
      else if (years === 1) ans += years + " yr ";
      if (months > 1) ans += months + " mos";
      else if (months === 1) ans += months + " mo";
    } else if (months >= 1) {
      if (months > 1) ans += months + " mos ";
      else if (months === 1) ans += months + " mo ";
      if (days > 1) ans += days + " days";
      else if (days === 1) ans += days + " day";
    } else if (days >= 1) {
      if (days > 1) ans += days + " days ";
      else if (days === 1) ans += days + " day ";
      if (hours > 1) ans += hours + " hrs";
      else if (hours === 1) ans += hours + " hr";
    } else {
      hours = ("0" + hours).slice(-2);
      minutes = ("0" + minutes).slice(-2);
      seconds = ("0" + seconds).slice(-2);
      ans = hours + ":" + minutes + ":" + seconds;
    }

    return ans;
  };

  export const formatDateTimeForCodeChef = (dateTimeString) => {
    const dateParts = dateTimeString.split(/[- :]/); // Split the string into parts
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1; // Month is zero-based
    const day = parseInt(dateParts[2], 10);
    const hours = parseInt(dateParts[3], 10);
    const minutes = parseInt(dateParts[4], 10);
    const seconds = parseInt(dateParts[5], 10);

    const date = new Date(Date.UTC(year, month, day, hours, minutes, seconds));

    // Format the date as "7/10/2023"
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1
      }/${date.getFullYear()}`;

    // Format the time as "5:30:00 pm"
    const formattedTime = `${date.getHours() % 12 || 12}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")} ${date.getHours() < 12 ? "am" : "pm"
      }`;

    // Combine the formatted date and time
    const formattedDateTime = `${formattedDate}, ${formattedTime}`;

    return formattedDateTime;
  }
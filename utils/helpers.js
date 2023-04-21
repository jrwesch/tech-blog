// From mini project -- need to adjust for this project

module.exports = {
    format_date: date => {
      // Format date as MM/DD/YYYY
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date)
      .getFullYear()}`;
    },
    format_plural: (word, amount) => {
      if (amoutn !== 1) {
        return `${word}s`;
      }

      return word;
    },
  };
  
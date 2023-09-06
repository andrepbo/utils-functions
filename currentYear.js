/**
 * Returns the current year.
 *
 * This function calculates and returns the current year based on the system's local time.
 * It utilizes the Date object to retrieve the year component from the current date.
 *
 * @returns {number} The current year.
 */
export function currentYear() {
  // Create a new Date object to capture the current date and time.
  const currDate = new Date();

  // Extract the year component from the current date.
  const currYear = currDate.getFullYear();

  // Return the current year as a number.
  return currYear;
}

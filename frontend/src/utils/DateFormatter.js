export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};
export const copyTextSubling = (el) => {
  const sublingText = el.currentTarget.nextSibling.textContent;
  const input = document.body.appendChild(document.createElement("input"));
  input.value = sublingText;
  input.select();
  document.execCommand("copy");
  input.parentNode.removeChild(input);
};

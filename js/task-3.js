function getElementWidth(content, padding, border) {
  // Извлекаем числа из строк, удаляя "px"
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding) * 2; // Умножаем на 2, так как padding с обеих сторон
  const borderWidth = parseFloat(border) * 2; // Умножаем на 2, так как border с обеих сторон
  
  // Вычисляем общую ширину элемента
  const totalWidth = contentWidth + paddingWidth + borderWidth;
  
  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
// utils.js
export const convertHTMLToTableData = (html) => {
    const data = [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
  
    const rows = doc.querySelectorAll('tr');
    rows.forEach(row => {
      const cells = row.querySelectorAll('td, th');
      const rowData = Array.from(cells).map(cell => cell.textContent.trim());
      if (rowData.length > 0) {
        data.push(rowData);
      }
    });
  
    return data;
  };
  
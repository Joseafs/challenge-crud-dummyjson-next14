const numberWithCurrencySymbol = new Intl.NumberFormat('pt-BR', {
  currency: 'BRL',
  signDisplay: 'auto',
  style: 'currency',
});

const formatCurrency = (value: number) => {
  if (isNaN(value) || value === undefined || value === null) {
    value = 0;
  }

  return numberWithCurrencySymbol.format(value);
};

export const formatCurrencyWithSymbol = (value: number) =>
  formatCurrency(value)
    .replace(/[\xa0\u202f]/gi, ' ')
    .trim();

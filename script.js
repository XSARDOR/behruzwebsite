function calculate() {
    const valueq = parseFloat(document.querySelector('.resultq').value);
    const valuev = parseFloat(document.querySelector('.resultv').value);

    if (isNaN(valueq) || isNaN(valuev)) {
        document.querySelector('.last-result').textContent = 'Iltimos, barcha qiymatlarni kiriting!';
        return;
    }

    const result = valueq / valuev;
    document.querySelector('.last-result').textContent = `Natija: ${result.toFixed(2)} F.`;
}


const gitLi = document.getElementById('imagem-git').parentElement;
const whatsLi = document.getElementById('imagem-whats').parentElement;
const linkedinLi = document.getElementById('imagem-linkedin').parentElement;

gitLi.addEventListener('click', () => {
    window.open('https://github.com/FireWater11', '_blank'); 
});

whatsLi.addEventListener('click', () => {
    window.open('https://wa.me/5546988326025', '_blank'); 
});

linkedinLi.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/luidi-augusto-710310359', '_blank'); 
});

document.getElementById('button').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Imagens/CurriculoLuidiAugusto.pdf'; 
    link.download = 'CurriculoLuidiAugusto.pdf';   
    link.click();
});
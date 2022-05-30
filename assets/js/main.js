function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.cliqueBotoes();
    this.pressionaEnter();
  }

  this.pressionaEnter = () => {
    this.display.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        this.realizaContas();
      }
    })
  }

  this.cliqueBotoes = () => {
    document.addEventListener('click', (e) => {
      const element = e.target;

      if (element.classList.contains('btn-num')) this.mostraNoDisplay(element.innerText);
      if (element.classList.contains('btn-clear')) this.limpaDisplay();
      if (element.classList.contains('btn-del')) this.deletaElemento();
      if (element.classList.contains('btn-eq')) this.realizaContas();
    });
  };

  this.mostraNoDisplay = (_Element) => {
    this.display.value += _Element;
    this.display.focus();
  }
  this.limpaDisplay = () => this.display.value = '';
  this.deletaElemento = () => this.display.value = this.display.value.slice(0, -1);

  this.realizaContas = () => {
    let conta = this.display.value;

    try {
      conta = eval(conta);

      if (!conta) {
        alert("Conta Inválida");
        return;
      }

      this.display.value = conta;
    } catch (e) {
      alert("Conta Inválida");
      location.reload();
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();

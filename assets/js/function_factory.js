function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {

      this.display.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
          this.realizaContas();
        }
      })
    },

    cliqueBotoes() {
      document.addEventListener('click', (e) => {
        const element = e.target;

        if (element.classList.contains('btn-num')) {
          this.mostraNoDisplay(element.innerText);
        }

        if (element.classList.contains('btn-clear')) {
          this.limpaDisplay();
        }

        if (element.classList.contains('btn-del')) {
          this.deletaElemento();
        }

        if (element.classList.contains('btn-eq')) {
          this.realizaContas();
        }

      })
    },

    mostraNoDisplay(_Valor) {
      this.display.value += _Valor;
    },

    limpaDisplay() {
      this.display.value = '';
    },

    deletaElemento() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaContas() {
      let conta = this.display.value

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta Inválida!");
          return;
        }

        this.display.value = conta;
      } catch {
        alert("Conta Inválida!");
        return;
      }
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();



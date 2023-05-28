// exercicio de conta bancarias

// vamos usar classes aqui

class ContaBancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo - saldo;
    }

// coloquei o _ na frente para que nossa funcao get e set tenha o nome de saldo mas a propriedade nao vai ter o nome saldo

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor
    }

    sacar(valor){
        if (valor < this._saldo){
            return "operação negada por falta de dinheiro"
        }
        this._saldo = this.saldo - valor;
        
        return this._saldo
    }

    depositar(valor){
        this._saldo + this._saldo + valor
        return this.saldo
    }
}


// criando agora uma nova classe de conta corrente que vai receber tudo que foi feito na classe contabancaria

// o super precisa de uma classe pai para isso usamos o extends

class contaCorrente extends ContaBancaria{
    constructor(agencia,numero,saldo, cartaoCredito){
        // a classe super vamos pegar tudo que recebemos e mandar para classe pai contaCorrente.
        super(agencia, numero, saldo)
        this.tipo = "cc-corrente"
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }
}

// criando uma classe para conta poupanca

class contaPoupanca extends ContaBancaria{
    constructor(agencia,numero,saldo){
        // a classe super vamos pegar tudo que recebemos e mandar para classe pai contaCorrente.
        super(agencia, numero, saldo)
        this.tipo = "cc-poupanca"
    }
}

// interagindo com o codigo

const minhaConta = new contaCorrente(1, 234, true)
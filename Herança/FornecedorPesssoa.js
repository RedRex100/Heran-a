import Fornecedor from './Fornecedor.js';

class FornecedorPessoa extends Fornecedor{
    
    constructor(nome="Sem Nome", fone="(00) 0000-0000", rg="12.125.723-6", cpf="132.456.789-09"){
        super(nome, fone);
        this.Rg = Rg;
        this.Cpf = Cpf;
    }

    setRg(rg) {
        this.rg = rg;
    }
    getRg() {
        return this.Rg;
    }
    setCpf(Cpf) {
        this.Cpf = Cpf;
    }
    getCpf() {
        return this.Cpf;
    }
}
export default FornecedorPessoa
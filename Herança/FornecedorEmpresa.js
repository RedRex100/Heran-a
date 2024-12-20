import Fornecedor from './Fornecedor.js';

class FornecedorEmpresa extends Fornecedor {
    
    constructor(nome="Sem Nome", fone="(00) 0000-0000", ie="123.456.789", cnpj="12.345.678/0001-99") {
        super(nome, fone);
        this.Ie = ie;
        this.Cnpj = cnpj;
    }

    setIe(ie) {
        this.Ie = ie;
    }

    getIe() {
        return this.Ie;
    }

    setCnpj(cnpj) {
        this.Cnpj = cnpj;
    }

    getCnpj() {
        return this.Cnpj;
    }
}

export default FornecedorEmpresa;

import Fornecedor from './Fornecedor.js';
import FornecedorPessoa from './FornecedorPesssoa.js';

const fornecedor = new Fornecedor("Pedro", "(11) 1234-5678")

console.log(`Dados do Fornecedor:
Nome: ${fornecedor.getNome()}
Fone: ${fornecedor.getFone()}`)

const fornecedorpessoa = new FornecedorPessoa("Miranda Silva", "(11)1234-5678", "12.165.789-6", "123.456.789-09")

console.log(`Dados dos Fornecedor Pessoa:
Nome: ${fornecedorpessoa.getNome()}
Fone: ${fornecedorpessoa.getFone()}
Rg: ${fornecedorpessoa.getNome()}
Cpf: ${fornecedorpessoa.getCpf()}`)

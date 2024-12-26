class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    };

    calculaCategoria() {
        let categoria = "";
        categoria = (this.idade >= 9 && this.idade <= 11) ? "Infantil" : 
                    (this.idade === 12 || this.idade === 13) ? "Juvenil":
                    (this.idade === 14 || this.idade === 15) ? "Intermediário":
                    (this.idade >= 16 && this.idade <= 30) ? "Adulto": "Sem categoria";
        return categoria;
    };

    calculaIMC() {
        let imc = this.peso / (this.altura * this.altura);
        return imc.toFixed(2);
    };

    calculaMediaValida() {
        for (let i = 0; i < this.notas.length; i++) {
            let notas = this.notas.sort((a, b) => a - b);
            let notasComputadas = notas.slice(1,4);
        
            let soma = 0;
            let mediaNotas = 0;
            notasComputadas.forEach(function(nota) {
                soma += nota;
                mediaNotas = soma / notasComputadas.length;
            });
            return mediaNotas.toFixed(2);
        };    
    };

    obtemNomeAtleta() {
        return this.nome;
    };

    obtemIdadeAtleta() {
        return this.idade;
    };

    obtemPesoAtleta() {
        return this.peso;
    };

    obtemAlturaAtleta() {
        return this.altura.toFixed(2);
    };

    obtemNotasAtleta() {
        return this.notas.join(", ");
    };

    obtemCategoria() {
        return this.calculaCategoria();
    };

    obtemIMC() {
        return this.calculaIMC();
    };

    obtemMediaValida() {
        return this.calculaMediaValida();
    };
};

const atleta = new Atleta("Rebeka Andreoli", 
    25, 50, 1.55, 
    [10, 9.8, 9.7, 10, 8.9]);

const atletaOutput = `
Nome: ${atleta.obtemNomeAtleta()}
Idade: ${atleta.obtemIdadeAtleta()}
Peso: ${atleta.obtemPesoAtleta()}
Altura: ${atleta.obtemAlturaAtleta()}
Notas: ${atleta.obtemNotasAtleta()}
Categoria: ${atleta.obtemCategoria()}
IMC: ${atleta.obtemIMC()}
Média válida: ${atleta.obtemMediaValida()}
`;

console.log(atletaOutput)





<template>
  <div class="calculator">
    <h1>Calculadora Aritmética</h1>
    
    <div class="input-group">
      <label for="numero1">Número 1:</label>
      <input 
        id="numero1" 
        type="number" 
        v-model.number="numero1" 
        @input="calcular"
      >
    </div>
    
    <div class="input-group">
      <label for="operacao">Operação:</label>
      <select 
        id="operacao" 
        v-model="operacao" 
        @change="calcular"
      >
        <option value="+">Soma (+)</option>
        <option value="-">Subtração (-)</option>
        <option value="*">Multiplicação (*)</option>
        <option value="/">Divisão (/)</option>
      </select>
    </div>
    
    <div class="input-group">
      <label for="numero2">Número 2:</label>
      <input 
        id="numero2" 
        type="number" 
        v-model.number="numero2" 
        @input="calcular"
      >
    </div>
    
    <div class="result">
      <h2>Resultado: {{ resultado }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      numero1: 0,
      numero2: 0,
      operacao: '+',
      resultado: 0
    }
  },
  methods: {
    calcular() {
      switch(this.operacao) {
        case '+':
          this.resultado = this.numero1 + this.numero2;
          break;
        case '-':
          this.resultado = this.numero1 - this.numero2;
          break;
        case '*':
          this.resultado = this.numero1 * this.numero2;
          break;
        case '/':
          this.resultado = this.numero2 !== 0 
            ? this.numero1 / this.numero2 
            : 'Erro: divisão por zero';
          break;
        default:
          this.resultado = 0;
      }
    }
  },
  mounted() {
    this.calcular(); // Calcula o resultado inicial
  }
}
</script>

<style>
.calculator {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.input-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.result {
  margin-top: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

h1 {
  text-align: center;
  color: #333;
}
</style>
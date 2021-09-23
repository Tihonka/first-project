<template>
  <div class="calc">
    <div class="main">
      <input v-model="op1" type="number" />
      <input v-model="op2" type="number" />
      <br />
      Результат = {{ result }}
      <br />
      = {{ fibResult }}
    </div>
    <div class="error" v-if="error">Ошибка: {{ error }}</div>
    <div class="messages">
      <template v-if="result < 0"> Получилось отрицательное число</template>
      <template v-else-if="result < 100">Результат в первой сотне</template>
      <template v-else>Просто условие</template>
    </div>
    <div class="keyboard">
      <button
        v-for="operand in operands"
        :key="operand"
        :title="operand"
        @click="calculate(operand)"
      >
        {{ operand }}
      </button>
    </div>
  <div class="virtualKeyboard">
    <input type="checkbox" id="checkbox" v-model="check"/>
<label for="checkbox">Отобразить экранную клавиатуру</label>
<br>
<div class="keys" v-show="check">
<button v-for="value in numbers"
:key="value"
:title="value"
@click="setValue (value)"
>
{{ value }}
</button>
<button @click="delSimbol ()">
←
</button>
</div>
<input type="radio" name='operand' value="op1" v-model="selectOp"/>
<label for="one">Операнд 1</label>
<input type="radio" name='operand' value="op2" v-model="selectOp"/>
<label for="two">Операнд 2</label>
  </div>
    <div class="logs">
      <div v-for="(log, id) in logs" :key="id">
        {{ log }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      op1: 0,
      op2: 0,
      selectOp: 'op1',
      result: 0,
      fibResult: 0,
      error: '',
      operands: ['+', '-', '/', '*', '^', '//'],
      numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      check: false,
      myColletcion: [1, 2, 3, 4, 5, 6, 7],
      logs: {},
      user: {
        role: 'Admin',
        grant: {
          isAdmin: true
        }
      }
    }
  },
  methods: {
    fib (n) {
      return n <= 1 ? n : this.fib(n - 1) + this.fib(n - 2)
    },
    setValue (value) {
      this[this.selectOp] += value
    },
    delSimbol () {
      this[this.selectOp] = String(this[this.selectOp]).slice(0, -1)
    },
    calculate (operation = '+') {
      this.error = ''
      switch (operation) {
        case '+':
          this.add()
          break
        case '-':
          this.sub()
          break
        case '/':
          this.div()
          break
        case '*':
          this.multi()
          break
        case '^':
          this.exp()
          break
        case '//':
          this.integerDiv()
          break
      }
      const key = Date.now()
      const value = `${this.op1}${operation}${this.op2} = ${this.result}`
      this.$set(this.logs, key, value)
    },
    add () {
      const { op1, op2 } = this
      this.result = +op1 + +op2
      this.fibResult = this.fib1 + this.fib2
    },
    sub () {
      const { op1, op2 } = this
      this.result = op1 - op2
      this.fibResult = this.fib1 - this.fib2
    },
    div () {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = 'На ноль делить нельзя!'
        this.result = ''
      } else {
        this.result = op1 / op2
      }
    },
    multi () {
      const { op1, op2 } = this
      this.result = op1 * op2
    },
    exp () {
      const { op1, op2 } = this
      this.result = Math.pow(op1, op2)
    },
    integerDiv () {
      const { op1, op2 } = this
      if (op2 === 0) {
        this.error = 'На ноль делить нельзя!'
        this.result = ''
      } else {
        this.result = parseInt(op1 / op2)
      }
    }
  },
  computed: {
    fib1 () {
      return this.fib(this.op1)
    },
    fib2 () {
      return this.fib(this.op2)
    },
    arryFilter () {
      return this.myColletcion.filter((i) => i > 5)
    }
  }
}
</script>

<style scoped lang="scss">
.myClass {
  width: 100px;
}
.virtualKeyboard {
  margin: 20px 0;
}

button {
  margin: 10px 5px 10px 0;
}
</style>

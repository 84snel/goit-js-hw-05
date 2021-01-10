class StringBuilder {
  constructor(string) {
    this._value = string;
  }

  get value() {
    return this._value;
  }

  append(str) {
    // this._value = this.value.concat(str);
    this._value += str;
  }

  prepend(str) {
    // this._value = str.concat(this.value);
    this._value = str + this.value;
  }

  pad(str) {
    // this._value = str + this.value + str;
    // this._value = str.concat(this.value, str);
    this.append(str);
    this.prepend(str);
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

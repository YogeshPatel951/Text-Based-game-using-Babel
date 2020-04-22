// @flow


export const INPUT_OPTIONS=Symbol("input_options");

export var options={
    _intro:"You Have Commands Like ",
    options:["left","right","down","up","poke"],
    outputOptions(WriteFn : arguments){
        this.options.forEach(f => WriteFn(this._intro + f));
    }
}
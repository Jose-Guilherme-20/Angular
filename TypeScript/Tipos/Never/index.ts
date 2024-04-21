const error = (msg: string): never => {
  throw new Error(msg);
};

const loop = (msg: string): never => {
  while (true) {
    console.log("loop");
  }
};

const validate = (value: any) => {
  if (typeof value === "string") {
    return "value é uma string";
  } else if (typeof value === "number") {
    return "value é um number";
  }

  return error("tipo não é valido");
};
console.log(validate(true));

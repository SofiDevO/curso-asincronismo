const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          return resolve("Async!!");
        }, 2000)
      : reject(new Err("Error!"));
  });
};

const anotherFunc = async () => {
  const something = await fnAsync();
  console.log(something);

  console.log("Hello!");
};

console.log("Before");
anotherFunc();
console.log("After");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 3000);
});

const myFunction = async () => {
  const result = await myPromise;

  console.log(result);
};

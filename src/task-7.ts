function getMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Hello from TypeScript!');
    }, 1000);
  });
}

getMessage().then((result) => {
  console.log(result.toUpperCase());
});

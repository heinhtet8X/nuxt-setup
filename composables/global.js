export function getGlobal() {
  function hello() {
    console.log("hello world");
  }

  return { hello };
}

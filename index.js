async function bar() {
  const foo = document.getElementById('#doesnotexist');
  console.log(`Foo: ${foo.style}`);
}

async function boo() {
  await bar();
}

boo();

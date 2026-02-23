function GlobalScope() {
  let brand = "5Star";
  function ad() {
    console.log(`brand is : ${brand}`);
  }
  console.log(`outside : ${brand}`);
  ad();
}

function LocalScope() {
  function ad() {
    let name = "Cadbury";
    console.log(`ad artist : ${name}`);
  }
  ad();
  //   console.log(`artist outside: ${name}`);
}

function NestedScope() {
  function sub() {
    let name = "ranjit";
    function Display() {
      let name2 = "Vaibhav";
      console.log(`another artist : ${name2}`);
    }
    Display();
  }
  sub();
}

function MixNestedScope() {
  let brand = "5star";
  function sub() {
    let name = "ranjit";
    function Display() {
      let name2 = "Vaibhav";
      console.log(`another artist : ${name2}`);
      if (true) {
        let final = "ad";
        console.log(
          `${final} is performed by ${name} ${name2} for ${brand} brand`,
        );
      }
    }
    Display();
  }
  sub();
}
// LocalScope();
// NestedScope();
// GlobalScope();
MixNestedScope();

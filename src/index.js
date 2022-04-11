import "./styles.css";

const importChallenges = [
  () => import("./1"),
  () => import("./2"),
  () => import("./3"),
  () => import("./4"),
  () => import("./5")
];
const challenges = [];
let buttons = [];

const isEqual = (a, b) => {
  if (a === b) return true;
  if (typeof a === "object" && typeof b === "object")
    return JSON.stringify(a) === JSON.stringify(b);
  return false;
};

const getChallenge = (i) => {
  const { question, solution, tests } = challenges[i];
  const workPath = `/src/${i + 1}/solution.js`;
  let testOk = true;
  const testGrid = tests
    .map((test) => {
      const result =
        test.exec !== undefined
          ? test.exec(solution)
          : solution && solution(test.input);
      const success = isEqual(test.expected, result);
      const cellCls = success ? "col" : "col invalid";

      if (!success) testOk = false;

      return `
        <div class="test">
          <div class="col">${JSON.stringify(test.input)}</div>
          <div class="col">${JSON.stringify(test.expected)}</div>
          <div class="${cellCls}">${JSON.stringify(result)}</div>
        </div>
      `;
    })
    .join("");
  const html = `
    ${question}    
    <h2>{Coding}</h2>
      <p>
        &gt; Resolve this challenge in <b>${workPath}</b>.
      </p>
    <h2>&#x2714; Testing results</h2>
      <p>
        &gt; At this time, the test result for your solution is <span class="${
          !testOk && "invalid"
        }"><b>${testOk ? "SUCCESS" : "FAILED"}</b></span>.<br/>
        ${testOk ? "CONGRATULATIONS! &#x1F44F;" : "Keep working on it!"}
      </p>
      <div class="test">
        <div class="col"><b>INPUT</b></div>
        <div class="col"><b>EXPECTED</b></div>
        <div class="col"><b>YOUR RESULT</b></div>
      </div>
      ${testGrid}
        `;

  buttons.forEach((btn, iBtn) =>
    iBtn === i
      ? btn.classList.add("selected")
      : btn.classList.remove("selected")
  );

  const contentDiv = document.querySelector("#content");

  contentDiv.innerHTML = html;
  contentDiv.classList[testOk ? 'add' : 'remove']('testing-ok');
};

const onLoad = () => {
  document.querySelector("#app").innerHTML = `
    <div id="menu">
      <button>Level &#x1F476;</button>
      <button>Level &#x1F609;</button>
      <button>Level &#x1F60E;</button>
      <button>Level &#x1F4AA;</button>
      <button>Level &#x1F525;</button>
    </div>
    <div id="content"></div>
  `;

  buttons = document.querySelector("#menu").querySelectorAll("button");
  buttons.forEach(
    (btn, i) =>
      (btn.onclick = () => {
        if (challenges[i]) {
          getChallenge(i);
        } else {
          importChallenges[i]().then((challenge) => {
            challenges[i] = challenge;
            getChallenge(i);
          });
        }
      })
  );

  if (buttons[0]) buttons[0].onclick();
};

onLoad();

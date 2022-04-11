export default `
<style>
  .keypad {
    width: 10rem;
  }
  .keypad .keypad-row {
    display: flex;
    border-top: 1px solid limegreen;
  }
  .keypad .keypad-row > span {
    flex: 1;
    padding: 0.3rem;
    text-align: center;
    border-left: 1px solid limegreen;
  }
  .keypad .keypad-row > span:last-child {
    border-right: 1px solid limegreen;
  }
  .keypad .keypad-row:last-child > span {
    border-bottom: 1px solid limegreen;
  }
</style>

<h1>Prison Break</h1>
<p>
  &gt; OK, Michael Scofield, your plan to escape from prison is going all right.
  As soon as you walk through that door you will be a free man.
  But the door is locked and a secret code must be entered on a keypad.
  You are hiding and you can spy on a guard who enters the code.
  However, from where you are you can see how many keys are pressed, but won't be sure about which digits he typed.  
</p>

<p>
  &gt; The appearance of the keypad is as shown below:
  <div class="keypad">
    <div class="keypad-row"><span>1</span><span>2</span><span>3</span></div>
    <div class="keypad-row"><span>4</span><span>5</span><span>6</span></div>
    <div class="keypad-row"><span>7</span><span>8</span><span>9</span></div>
    <div class="keypad-row"><span></span><span>0</span><span></span></div>
  </div>  
</p>

<p>
  &gt; It is possible that each of the digits you see could actually be another 
  adjacent digit (horizontally or vertically, but not diagonally). 
  E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.
</p>

<p>
  &gt; Now you need a function that returns an array of all possible combinations for an observed code.
  
</p>

<p>
  &gt; Considerations:
  <ol>
    <li>All codes, the observed one and also the results, must be strings.</li>
    <li>The result codes must be sorted in ascending order.</li>
  </ol>
</p>
`;

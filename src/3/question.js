export default `
<h1>Smart calculator</h1>
<p>
  &gt; We are building a calculator for blind people.
  To achieve this, we are using IA technology that transforms voice commands into program functions, as follows: 
</p>

<ul>
  <li>six(times(five()))</li>
  <li>three(plus(eight()))</li>
  <li>four(minus(one()))</li>
  <li>six(dividedBy(two()))</li>
</ul>

<p>
  &gt; All that remains is to implement all the functions used by the calculator to perform the operations. 
</p>

<p>
&gt; Considerations:
</p>

<ol>
  <li>You don't have to worry about reading and parsing any input. You only must implement all the required functions and the tests will automatically call the ones that apply on each command.</li>
  <li>Your solution must export a total of 14 functions: One for each number from 0 ("zero") to 9 ("nine") and one for each of the following mathematical operations: "plus", "minus", "times", "dividedBy".</li>
  <li>Each calculation consists of exactly one operation and two numbers.</li>
  <li>The most outer function represents the left operand, the most inner function represents the right operand.</li>
  <li>Division should be integer division. For example, eight(dividedBy(three())) should return 2, not 2.666666...</li>
</ol>
`;

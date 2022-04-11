export default `
<h1>The Rock Star</h1>
<p>
  &gt; A Rock Star has hired you to deploy one million lights in a 1000x1000 grid for his concert.
  Lights in your grid are numbered from 0 to 999 in each direction; the lights at each corner are 
  at 0,0, 0,999, 999,999, and 999,0.
</p>

<p>
  &gt; The technical staff people has mailed you instructions on what to do with lights during the concert to make the show impressive.
  The instructions are an array of strings that include whether to turn on, turn off, or toggle various inclusive ranges given as coordinate pairs. 
  Each coordinate pair represents opposite corners of a rectangle, inclusive; a coordinate pair like 0,0 through 2,2 
  therefore refers to 9 lights in a 3x3 square. The lights all start turned off.
</p>

<p>
  &gt; For example:

  <ul>
    <li>"turn on 0,0 through 999,999" would turn on (or leave on) every light.</li>
    <li>"toggle 0,0 through 999,0" would toggle the first line of 1000 lights, turning off the ones that were on, and turning on the ones that were off.</li>
    <li>"turn off 499,499 through 500,500" would turn off (or leave off) the middle four lights.</li>
  </ul>
</p>

<p>
  &gt; Now, they ask you for help to know how many lights will stay turned on after all instructions are completed and the concert ends.<br/>
  Make the function that returns the correct number and you will be the coding Rock Star!
</p>
`;

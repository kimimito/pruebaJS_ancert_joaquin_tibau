export default `
<h1>Average method</h1>
<p>
  &gt; Modify the Array class to include an average method. The method give the average value of the items it contains. For example:
</p>

<ul>
  <li>[1,2,3].average() = 2</li>
</ul>

<p>
&gt; Considerations:
</p>

<ol>
  <li>
    If any item in the array is also an array, the method should calculate that average first, like so:<br/><br/>
    [1,2,[2,4]].average() = 2<br/><br/>
    The method should first average [2,4] into 3, and then average the resulting [1,2,3] into 2.<br/><br/>
  </li>
  <li>
    The method should attempt to work with non-numbers:<br/><br/>
    [1,2,'3 doors down'].average() = 2 <i>(where "3 doors down" == 3)</i><br/>
    [0.4, '1.6'].average() = 1 <i>(where '1.6' == 1.6)</i>
  </li>
</ol>
`;

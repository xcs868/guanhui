<?php
	if(debug==1){ 
?>
<link rel="stylesheet" type="text/css" href="calenderSelect.css" />
<?php	
	} 
?>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <TABLE border="0" cellpadding="0" cellspacing="0" class="dirsCalender">
   <TR>
     <TD class="TL"></TD>
     <TD class="TC"></TD>
     <TD class="TR"></TD>
   </TR>
   <TR>
     <TD class="CL"></TD>
     <TD>
		<table width="100%" border="0" cellpadding="0" cellspacing="0" class="dirsCalenderForm" id="jpCalcalenderTable">
		  <tr>
			<td><a class="back" onclick="objCal.setMoveMonth('objCal',-1)">&nbsp;&lt;&lt;</a></td>
			<td colspan="5" class="titlebar" id="jpCalenderTitle" align="center">12月</td>
			<td align="right"><a class="back" onclick="objCal.setMoveMonth('objCal',1)">&gt;&gt;&nbsp;</a></td>
		  </tr>
		  <tr>
			<td class="subTitlebarOnRed">日</td>
			<td class="subTitlebarOf">一</td>
			<td class="subTitlebarOf">二</td>
			<td class="subTitlebarOf">三</td>
			<td class="subTitlebarOf">四</td>
			<td class="subTitlebarOf">五</td>
			<td class="subTitlebarOnBlu">六</td>
		  </tr>
		  <tr>
			<td class="subTitlebarOnRed" id="jpCalCel_0"><div class="dayFrameN">0</div></td>
			<td class="dayFrame" id="jpCalCel_1"><div class="dayFrameN">1</div></td>
			<td class="dayFrame" id="jpCalCel_2"><div class="dayFrameN">2</div></td>
			<td class="dayFrame" id="jpCalCel_3"><div class="dayFrameN">3</div></td>
			<td class="dayFrame" id="jpCalCel_4"><div class="dayFrameN">4</div></td>
			<td class="dayFrame" id="jpCalCel_5"><div class="dayFrameN">5</div></td>
			<td class="subTitlebarOnBlu" id="jpCalCel_6"><div class="dayFrameN">6</div></td>
		  </tr>
		  <tr>
			<td class="subTitlebarOnRed" id="jpCalCel_7"><div class="dayFrameN">7</div></td>
			<td class="dayFrame" id="jpCalCel_8"><div class="dayFrameN">8</div></td>
			<td class="dayFrame" id="jpCalCel_9"><div class="dayFrameN">9</div></td>
			<td class="dayFrame" id="jpCalCel_10"><div class="dayFrameN">10</div></td>
			<td class="dayFrame" id="jpCalCel_11"><div class="dayFrameN">11</div></td>
			<td class="dayFrame" id="jpCalCel_12"><div class="dayFrameN">12</div></td>
			<td class="subTitlebarOnBlu" id="jpCalCel_13"><div class="dayFrameN">13</div></td>
		  </tr>
		  <tr>
			<td class="subTitlebarOnRed" id="jpCalCel_14"><div class="dayFrameN">14</div></td>
			<td class="dayFrame" id="jpCalCel_15"><div class="dayFrameN">15</div></td>
			<td class="dayFrame" id="jpCalCel_16"><div class="dayFrameN">16</div></td>
			<td class="dayFrame" id="jpCalCel_17"><div class="dayFrameN">17</div></td>
			<td class="dayFrame" id="jpCalCel_18"><div class="dayFrameN">18</div></td>
			<td class="dayFrame" id="jpCalCel_19"><div class="dayFrameN">19</div></td>
			<td class="subTitlebarOnBlu" id="jpCalCel_20"><div class="dayFrameN">20</div></td>
		  </tr>
		  <tr>
			<td class="subTitlebarOnRed" id="jpCalCel_21"><div class="dayFrameN">21</div></td>
			<td class="dayFrame" id="jpCalCel_22"><div class="dayFrameN">22</div></td>
			<td class="dayFrame" id="jpCalCel_23"><div class="dayFrameN">23</div></td>
			<td class="dayFrame" id="jpCalCel_24"><div class="dayFrameN">24</div></td>
			<td class="dayFrame" id="jpCalCel_25"><div class="dayFrameN">15</div></td>
			<td class="dayFrame" id="jpCalCel_26"><div class="dayFrameN">26</div></td>
			<td class="subTitlebarOnBlu" id="jpCalCel_27"><div class="dayFrameN">27</div></td>
		  </tr>
		  <tr>
			<td class="subTitlebarOnRed" id="jpCalCel_28"><div class="dayFrameN">28</div></td>
			<td class="dayFrame" id="jpCalCel_29"><div class="dayFrameN">29</div></td>
			<td class="dayFrame" id="jpCalCel_30"><div class="dayFrameN">30</div></td>
			<td class="dayFrame" id="jpCalCel_31"><div class="dayFrameN">31</div></td>
			<td class="dayFrame" id="jpCalCel_32"><div class="dayFrameN">32</div></td>
			<td class="dayFrame" id="jpCalCel_33"><div class="dayFrameN">33</div></td>
			<td class="subTitlebarOnBlu" id="jpCalCel_34"><div class="dayFrameN">34</div></td>
		  </tr>
		  <tr>
			<td class="subTitlebarOnRed" id="jpCalCel_35"><div class="dayFrameN">35</div></td>
			<td class="dayFrame" id="jpCalCel_36"><div class="dayFrameN">36</div></td>
			<td class="dayFrame" id="jpCalCel_37"><div class="dayFrameN">37</div></td>
			<td class="dayFrame" id="jpCalCel_38"><div class="dayFrameN">38</div></td>
			<td class="dayFrame" id="jpCalCel_39"><div class="dayFrameN">39</div></td>
			<td class="dayFrame" id="jpCalCel_40"><div class="dayFrameN">40</div></td>
			<td class="subTitlebarOnBlu" id="jpCalCel_41"><div class="dayFrameN">41</div></td>
		  </tr>
	   </table>
	 </TD>
     <TD class="CR"></TD>
	</TR>
   <TR>
     <TD class="FL"></TD>
     <TD class="FC"></TD>
     <TD class="FR"></TD>
   </TR>
  </TABLE>

  
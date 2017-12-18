<?php
$z[0]=Array("field","",199,218);
$z[0][4]['name']="title";
$z[1]=Array("global","",219,245);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",293,352);
$z[2][4]['name']="description";
$z[2][4]['function']="html2text(@me)";
$z[3]=Array("field","",393,422);
$z[3][4]['name']="keywords";
$z[4]=Array("channel","	\r\n					<li><a href=\"[field:typeurl/]\">[field:typename/]</a></li>\r\n				",2003,2124);
$z[4][4]['reid']="1";
$z[4][4]['type']="son";
$z[5]=Array("include","",2733,2768);
$z[5][4]['filename']="head.htm";
$z[6]=Array("list","		\r\n				<li>\r\n					<!--标签旗帜---><div class=\"jiaoluo\"></div>\r\n					<div class=\"tagg\"><a>[field:typelink/]</a></div>\r\n					<div class=\"tagg1\"></div>\r\n					<!--标题--->\r\n					<div class=\"biaotii clearfix\">\r\n						<h2 class=\"fl\"><a href=\"[field:arcurl/]\">[field:title/]</a></h2>\r\n						<span class=\"rt\">[field:pubdate function=\"GetDateMK(@me)\"/]</span>\r\n					</div>\r\n					<!--- 缩略图简介---->\r\n					<div class=\"slt\"><a href=\"[field:arcurl/]\"><img src=\"[field:picname/]\"></a></div>\r\n					<div class=\"zww\">[field:description/]... \r\n					<br><a href=\"[field:arcurl/]\"> <查看全文> </a>\r\n					</div>\r\n					<!-- 关键词---->\r\n					<div class=\"gongn clearfix\">\r\n						<div class=\"tagss rt\">本文关键字：  [field:id function=GetTags(@me)/]</div>			\r\n					</div>\r\n				</li>\r\n		",2939,3794);
$z[6][4]['pagesize']="6";
$z[6][4]['orderby']="id";
$z[6][4]['orderway']="desc";
$z[7]=Array("pagelist","",3862,3926);
$z[7][4]['istitem']="index,pre,next,end,info";
$z[7][4]['listsize']="5";
$z[8]=Array("channel","	\r\n					<li><a href=\"[field:typeurl/]\">[field:typename/]</a></li>\r\n				",5380,5501);
$z[8][4]['reid']="1";
$z[8][4]['type']="son";
$z[9]=Array("arclist","\r\n					<li><a href=\"[field:arcurl/]\">-&nbsp;[field:title/]</a></li>\r\n					",5586,5728);
$z[9][4]['row']="100";
$z[9][4]['pagesize']="10";
$z[9][4]['orderby']="rand";
$z[10]=Array("tag"," \r\n<li><a href='[field:link/]' target=\"_blank\">[field:tag /]</a> </li>\r\n",5887,6011);
$z[10][4]['row']="30";
$z[10][4]['sort']="new";
$z[10][4]['getall']="0";
$z[11]=Array("include","",6115,6157);
$z[11][4]['filename']="news-footer.htm";

?>
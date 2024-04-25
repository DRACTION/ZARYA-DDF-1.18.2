# Скрипт для пересчета хеш-суммы
$output = "## Список музыки с расширением ``.OGG`` и ХЭШ-суммы`n"
$output += "`n"
foreach($f in dir){
	if($f.Extension -eq ".ogg"){
		$output += "    Имя файла: " + $f.Name + "`n"
		$output += "    MD5: " + (Get-FileHash -LiteralPath $f -Algorithm MD5).Hash + "`n"
		$output +=  "---`n"
}}
Out-File -FilePath .\MUSICLIST.md -InputObject $output -Encoding utf8
# Скрипт для пересчета хеш-суммы
$output = "## Список музыки с расширениями ``.OGG`` и ``.MP3``, а также ХЭШ-суммы`n"
$output += "`n"
foreach($f in dir){
	if(($f.Extension -eq ".ogg") -or ($f.Extension -eq ".mp3")){
		$output += "    Имя файла: " + $f.Name + "`n"
		$output += "    MD5: " + (Get-FileHash -LiteralPath $f -Algorithm MD5).Hash + "`n"
		$output +=  "---`n"
}}
Out-File -FilePath .\MUSICLIST.md -InputObject $output -Encoding utf8
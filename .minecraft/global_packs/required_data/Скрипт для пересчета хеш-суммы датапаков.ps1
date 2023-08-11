# Скрипт для пересчета хеш-суммы модов
$output = "## Список датапаков и ХЭШ-суммы`n"
$output += "`n"
foreach($f in dir){
	if($f.Extension -eq ".zip"){
		$output += "    Имя файла: " + $f.Name + "`n"
		$output += "    MD5: " + (Get-FileHash -LiteralPath $f -Algorithm MD5).Hash + "`n"
		$output +=  "---`n"
}}
Out-File -FilePath .\DATAPACKLIST.md -InputObject $output -Encoding utf8
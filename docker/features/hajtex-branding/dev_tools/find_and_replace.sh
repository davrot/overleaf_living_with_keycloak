cd /overleaf/ && grep -l -R "Powered by Overleaf" * | grep -v node_modules > /var/lib/overleaf/list.txt

for line in $(cat /var/lib/overleaf/list.txt)
do
	dirname=$(dirname $line)
	mkdir -p /var/lib/overleaf/$dirname
	cat ${line} |\
		 sed 's/https:\\u002F\\u002Fwww.overleaf.com\\u002Ffor\\u002Fenterprises\\/https:\/\/github.com\/HajTeX\/HajTeX/g' |\
		 sed 's/https:\\u002F\\u002Fwww.overleaf.com\\u002Ffor\\u002Fenterprises/https:\/\/github.com\/HajTeX\/HajTeX/g' |\
		 sed 's/https:\/\/www.overleaf.com\/for\/enterprises/https:\/\/github.com\/HajTeX\/HajTeX/g' |\
		 sed s/"Powered by Overleaf"/"Powered by HajTex"/g > ${line}_bak
	rm ${line} 
	mv ${line}_bak ${line}
	cp ${line} /var/lib/overleaf/${line}

done


#curl "http://localhost:4200/$1" -H 'Host: localhost:4200' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:32.0) Gecko/20100101 Firefox/32.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Language: pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3' -H 'Accept-Encoding: gzip, deflate' -H 'Referer: http://localhost:4200/assets/vendor.css' -o "$2"
curl "http://localhost:4200/$1" -H 'Host: localhost:4200' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux i686; rv:32.0) Gecko/20100101 Firefox/32.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Language: pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3' -H 'Accept-Encoding: gzip, deflate' -H 'Referer: http://localhost:4200/assets/i1843.css' -H 'Cookie: Drupal.visitor.admin_compact_mode=1' -H 'Connection: keep-alive' -o "$2"

"""Check the published HTML's language and local asset references from a static build."""
import argparse
from html.parser import HTMLParser
from pathlib import Path
import re
from urllib.parse import urlsplit,unquote

class Document(HTMLParser):
 def __init__(self):super().__init__();self.assets=[];self.lang=None;self.visible=[];self.skip=0;self.redirect=False
 def handle_starttag(self,tag,attrs):
  attrs=dict(attrs)
  if tag=='html':self.lang=attrs.get('lang')
  if tag=='meta' and attrs.get('http-equiv','').lower()=='refresh':self.redirect=True
  if tag in ('script','style'):self.skip+=1
  for key in ('src','poster'):
   if attrs.get(key):self.assets.append(attrs[key])
  if attrs.get('srcset'):
   self.assets.extend(x.strip().split()[0] for x in attrs['srcset'].split(',') if x.strip())
  if tag=='link' and attrs.get('rel') in ('stylesheet','icon','preload','modulepreload') and attrs.get('href'):self.assets.append(attrs['href'])
 def handle_endtag(self,tag):
  if tag in ('script','style'):self.skip=max(0,self.skip-1)
 def handle_data(self,value):
  if not self.skip:self.visible.append(value)

p=argparse.ArgumentParser(description=__doc__);p.add_argument('directory',type=Path);p.add_argument('--languages',nargs='+',default=['en']);a=p.parse_args();errors=[];pages=0
for path in a.directory.rglob('*.html'):
 d=Document();d.feed(path.read_text());pages+=1
 if d.lang not in a.languages and not (d.lang is None and d.redirect):errors.append(f'{path.relative_to(a.directory)}: language is {d.lang}')
 if d.lang=='en' and re.search('[\u0400-\u04ff]',''.join(d.visible)):errors.append(f'{path.relative_to(a.directory)}: untranslated visible text')
 for asset in d.assets:
  u=urlsplit(asset)
  if u.scheme or u.netloc:continue
  f=a.directory/unquote(u.path).lstrip('/') if u.path.startswith('/') else path.parent/unquote(u.path)
  if not f.is_file():errors.append(f'{path.relative_to(a.directory)}: missing asset {asset}')
if errors:raise SystemExit('\n'.join(sorted(set(errors))))
print(f'Verified {pages} static pages in allowed languages and their referenced assets.')

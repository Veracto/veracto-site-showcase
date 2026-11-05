"""Adapt a static build's root-relative document/CSS asset URLs to a project Pages base."""
import argparse
import re
from pathlib import Path

p=argparse.ArgumentParser(description=__doc__)
p.add_argument('directory',type=Path)
p.add_argument('--base',required=True)
a=p.parse_args()
base='/' + a.base.strip('/')
for path in a.directory.rglob('*'):
 if not path.is_file() or path.suffix not in ('.html','.css','.xml'):continue
 s=path.read_text()
 if path.suffix=='.html':
  s=s.replace('data-analytics-root','data-portfolio-disabled-analytics-root').replace('<head>','<head><style>[data-portfolio-disabled-analytics-root]{display:none!important}</style>',1)
  s=re.sub(r'((?:href|src|poster|action|data-[\w-]+)=["\'])(/(?!/)[^"\']*)',lambda m:m[1]+base+m[2] if not m[2].startswith(base+'/') else m[0],s)
  s=re.sub(r'(?<=[" ,])(/(?:_astro|images|portraits|fonts)/[^\s,"\']+)',lambda m:base+m[1] if not m[1].startswith(base+'/') else m[0],s)
 if path.suffix=='.css':s=re.sub(r'(url\(["\']?)(/(?!/)[^)"\']+)',lambda m:m[1]+base+m[2],s)
 # This is a portfolio preview, not a search-indexed copy of the business site.
 if path.suffix=='.html':s=s.replace('<head>','<head><meta name="robots" content="noindex,nofollow">',1)
 path.write_text(s)
(a.directory/'.nojekyll').touch()
(a.directory/'robots.txt').write_text('User-agent: *\nDisallow: /\n')
print('Prepared static project base:',base)

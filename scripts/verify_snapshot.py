"""Check the published snapshot against its selected original file hashes."""
import hashlib,json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
rows=json.loads((root/'source-snapshot.json').read_text())['files']
for row in rows:
 if hashlib.sha256((root/row['path']).read_bytes()).hexdigest()!=row['sha256']:
  raise SystemExit('Snapshot mismatch: '+row['path'])
print(f'Verified {len(rows)} selected original files, including both locales.')

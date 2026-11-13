# LODAM LEE · Player File (PWA)

이로담 선수 프로필 페이지. 단일 HTML + PWA 자산. 빌드·서버 불필요.

## 파일
- `index.html` — 앱 본체 (스타일·스크립트·3초 인트로·영상 데이터 내장)
- `manifest.webmanifest` · `sw.js`(캐시 `lodamlee-v1`) · `icons/`

## 배포 (GitHub Pages)
1. 새 저장소 → 이 폴더 파일 전체 업로드 (index.html이 루트)
2. Settings → Pages → Deploy from a branch / main / (root)
3. `https://<계정>.github.io/<저장소>/`
4. 폰에서 접속 → 공유 → 홈 화면에 추가 (iOS는 Safari만)

## URL 옵션
- `?theme=light` / `?theme=dark`
- `?nointro`
- `#career` `#intl` `#film` `#brief`

## 데이터 갱신
`index.html`의 `var DATA = [...]`. 항목: `{id, grp, lg, len, v, y, t}`.
grp: `OWN`(본인 클립) / `TEAM`(팀 경기) / `INTL`(해외대회).
영상 추가 후 `sw.js` 캐시명을 `lodamlee-v2`로 올릴 것.

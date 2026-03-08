const countries = [
  { ko: '그리스', en: 'Greece', code: 'GR', lat: 39.0742, lng: 21.8243 },
  { ko: '뉴질랜드', en: 'New Zealand', code: 'NZ', lat: -40.9006, lng: 174.886 },
  { ko: '러시아', en: 'Russia', code: 'RU', lat: 61.524, lng: 105.3188 },
  { ko: '말레이시아', en: 'Malaysia', code: 'MY', lat: 4.2105, lng: 101.9758 },
  { ko: '베트남', en: 'Vietnam', code: 'VN', lat: 14.0583, lng: 108.2772 },
  { ko: '브루나이', en: 'Brunei', code: 'BN', lat: 4.5353, lng: 114.7277 },
  { ko: '스페인', en: 'Spain', code: 'ES', lat: 40.4637, lng: -3.7492 },
  { ko: '아일랜드', en: 'Ireland', code: 'IE', lat: 53.1424, lng: -7.6921 },
  { ko: '우크라이나', en: 'Ukraine', code: 'UA', lat: 48.3794, lng: 31.1656 },
  { ko: '중국', en: 'China', code: 'CN', lat: 35.8617, lng: 104.1954 },
  { ko: '카타르', en: 'Qatar', code: 'QA', lat: 25.3548, lng: 51.1839 },
  { ko: '태국', en: 'Thailand', code: 'TH', lat: 15.87, lng: 100.9925 },
  { ko: '핀란드', en: 'Finland', code: 'FI', lat: 61.9241, lng: 25.7482 },
  { ko: '홍콩', en: 'Hong Kong', code: 'HK', lat: 22.3193, lng: 114.1694 },
  { ko: '그린란드', en: 'Greenland', code: 'GL', lat: 71.7069, lng: -42.6043 },
  { ko: '대만', en: 'Taiwan', code: 'TW', lat: 23.6978, lng: 120.9605 },
  { ko: '레위니옹', en: 'Réunion', code: 'RE', lat: -21.1151, lng: 55.5364 },
  { ko: '멕시코', en: 'Mexico', code: 'MX', lat: 23.6345, lng: -102.5528 },
  { ko: '벨기에', en: 'Belgium', code: 'BE', lat: 50.5039, lng: 4.4699 },
  { ko: '사우디아라비아', en: 'Saudi Arabia', code: 'SA', lat: 23.8859, lng: 45.0792 },
  { ko: '싱가포르', en: 'Singapore', code: 'SG', lat: 1.3521, lng: 103.8198 },
  { ko: '영국', en: 'United Kingdom', code: 'GB', lat: 55.3781, lng: -3.436 },
  { ko: '이탈리아', en: 'Italy', code: 'IT', lat: 41.8719, lng: 12.5674 },
  { ko: '체코', en: 'Czechia', code: 'CZ', lat: 49.8175, lng: 15.473 },
  { ko: '캐나다', en: 'Canada', code: 'CA', lat: 56.1304, lng: -106.3468 },
  { ko: '터키', en: 'Türkiye', code: 'TR', lat: 38.9637, lng: 35.2433 },
  { ko: '필리핀', en: 'Philippines', code: 'PH', lat: 12.8797, lng: 121.774 },
  { ko: '네덜란드', en: 'Netherlands', code: 'NL', lat: 52.1326, lng: 5.2913 },
  { ko: '덴마크', en: 'Denmark', code: 'DK', lat: 56.2639, lng: 9.5018 },
  { ko: '루마니아', en: 'Romania', code: 'RO', lat: 45.9432, lng: 24.9668 },
  { ko: '미국', en: 'United States', code: 'US', lat: 37.0902, lng: -95.7129 },
  { ko: '불가리아', en: 'Bulgaria', code: 'BG', lat: 42.7339, lng: 25.4858 },
  { ko: '스웨덴', en: 'Sweden', code: 'SE', lat: 60.1282, lng: 18.6435 },
  { ko: '아랍에미리트', en: 'United Arab Emirates', code: 'AE', lat: 23.4241, lng: 53.8478 },
  { ko: '오만', en: 'Oman', code: 'OM', lat: 21.4735, lng: 55.9754 },
  { ko: '인도네시아', en: 'Indonesia', code: 'ID', lat: -0.7893, lng: 113.9213 },
  { ko: '칠레', en: 'Chile', code: 'CL', lat: -35.6751, lng: -71.543 },
  { ko: '케냐', en: 'Kenya', code: 'KE', lat: -0.0236, lng: 37.9062 },
  { ko: '폴란드', en: 'Poland', code: 'PL', lat: 51.9194, lng: 19.1451 },
  { ko: '헝가리', en: 'Hungary', code: 'HU', lat: 47.1625, lng: 19.5033 },
  { ko: '노르웨이', en: 'Norway', code: 'NO', lat: 60.472, lng: 8.4689 },
  { ko: '독일', en: 'Germany', code: 'DE', lat: 51.1657, lng: 10.4515 },
  { ko: '룩셈부르크', en: 'Luxembourg', code: 'LU', lat: 49.8153, lng: 6.1296 },
  { ko: '미얀마', en: 'Myanmar', code: 'MM', lat: 21.9162, lng: 95.956 },
  { ko: '브라질', en: 'Brazil', code: 'BR', lat: -14.235, lng: -51.9253 },
  { ko: '스위스', en: 'Switzerland', code: 'CH', lat: 46.8182, lng: 8.2275 },
  { ko: '아이슬란드', en: 'Iceland', code: 'IS', lat: 64.9631, lng: -19.0208 },
  { ko: '오스트리아', en: 'Austria', code: 'AT', lat: 47.5162, lng: 14.5501 },
  { ko: '일본', en: 'Japan', code: 'JP', lat: 36.2048, lng: 138.2529 },
  { ko: '카자흐스탄', en: 'Kazakhstan', code: 'KZ', lat: 48.0196, lng: 66.9237 },
  { ko: '쿠웨이트', en: 'Kuwait', code: 'KW', lat: 29.3117, lng: 47.4818 },
  { ko: '프랑스', en: 'France', code: 'FR', lat: 46.2276, lng: 2.2137 },
  { ko: '호주', en: 'Australia', code: 'AU', lat: -25.2744, lng: 133.7751 }
];

const seoulHQ = {
  ko: '서울 본사',
  en: 'Seoul Headquarters',
  code: 'KR',
  lat: 37.5665,
  lng: 126.978,
  wikiTitle: 'Seoul',
  staticStats: { population: 9334952, gniPerCapita: 36024 }
};

const map = L.map('map', { worldCopyJump: true, minZoom: 2 }).setView([24, 20], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const preview = document.getElementById('countryPreview');
const flagGrid = document.getElementById('flagGrid');
const statsCache = new Map();
let activePreviewKey = null;

const markerIcon = L.divIcon({
  className: 'pin-wrap',
  html: '<div class="pin"></div>',
  iconSize: [18, 18],
  iconAnchor: [9, 18],
  popupAnchor: [0, -18]
});

const hqIcon = L.divIcon({
  className: 'pin-wrap',
  html: '<div class="pin pin-hq"></div>',
  iconSize: [22, 22],
  iconAnchor: [11, 22],
  popupAnchor: [0, -20]
});

const numberFormatter = new Intl.NumberFormat('ko-KR');
const currencyFormatter = new Intl.NumberFormat('ko-KR', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});

const countryToFlag = (code) =>
  code
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt()));

const makeWikiLink = (title) => `https://en.wikipedia.org/wiki/${encodeURIComponent(title.replace(/ /g, '_'))}`;

const formatStats = (stats) => ({
  population: stats.population ? `${numberFormatter.format(stats.population)}명` : '자료 준비중',
  gni: typeof stats.gniPerCapita === 'number' ? `${currencyFormatter.format(stats.gniPerCapita)} / 1인` : '자료 준비중'
});

const renderPreview = (country, flag, stats, loading = false) => {
  const wikiLink = makeWikiLink(country.wikiTitle || country.en);
  const statLine = formatStats(stats);

  preview.innerHTML = `
    <article class="preview-card">
      <a class="preview-flag link-reset" href="${wikiLink}" target="_blank" rel="noopener noreferrer" title="위키백과로 이동">${flag}</a>
      <h3 class="preview-title">${country.ko}</h3>
      <p class="preview-meta">${country.en}</p>
      <p class="preview-meta">국가코드: ${country.code}</p>
      <p class="preview-meta">인구수: ${loading ? '불러오는 중...' : statLine.population}</p>
      <p class="preview-meta">국민소득(GNI): ${loading ? '불러오는 중...' : statLine.gni}</p>
      <a class="preview-banner" href="${wikiLink}" target="_blank" rel="noopener noreferrer">${country.ko} 위키백과 배너 바로가기</a>
    </article>
  `;
};

const fetchCountryStats = async (country) => {
  if (statsCache.has(country.code)) return statsCache.get(country.code);

  const [restResponse, wbResponse] = await Promise.allSettled([
    fetch(`https://restcountries.com/v3.1/alpha/${country.code}?fields=population`),
    fetch(`https://api.worldbank.org/v2/country/${country.code}/indicator/NY.GNP.PCAP.CD?format=json&per_page=60`)
  ]);

  let population = null;
  let gniPerCapita = null;

  if (restResponse.status === 'fulfilled' && restResponse.value.ok) {
    const restData = await restResponse.value.json();
    if (Array.isArray(restData) && restData[0]?.population) population = restData[0].population;
  }

  if (wbResponse.status === 'fulfilled' && wbResponse.value.ok) {
    const wbData = await wbResponse.value.json();
    if (Array.isArray(wbData?.[1])) {
      const latest = wbData[1].find((row) => typeof row.value === 'number');
      gniPerCapita = latest?.value ?? null;
    }
  }

  const stats = { population, gniPerCapita };
  statsCache.set(country.code, stats);
  return stats;
};

const buildPopupHtml = (country, flag, wikiLink) =>
  `<div class="popup-card"><strong>${flag} ${country.ko}</strong><span>${country.en}</span><br/><a href="${wikiLink}" target="_blank" rel="noopener noreferrer">위키백과 보기</a></div>`;

const activateCountryPreview = async (country, marker, flag) => {
  const key = country.code;
  activePreviewKey = key;
  marker.openPopup();
  renderPreview(country, flag, { population: null, gniPerCapita: null }, true);

  try {
    const stats = country.staticStats || (await fetchCountryStats(country));
    if (activePreviewKey === key) renderPreview(country, flag, stats, false);
  } catch (_error) {
    if (activePreviewKey === key) renderPreview(country, flag, { population: null, gniPerCapita: null }, false);
  }
};

countries.forEach((country) => {
  const flag = countryToFlag(country.code);
  const wikiLink = makeWikiLink(country.en);
  const marker = L.marker([country.lat, country.lng], { icon: markerIcon }).addTo(map);

  marker.bindPopup(buildPopupHtml(country, flag, wikiLink), {
    closeButton: true,
    autoClose: true
  });

  marker.on('mouseover', () => {
    activateCountryPreview(country, marker, flag);
  });

  marker.on('click', () => {
    activateCountryPreview(country, marker, flag);
  });

  const flagLink = document.createElement('a');
  flagLink.className = 'flag-pill link-reset';
  flagLink.href = wikiLink;
  flagLink.target = '_blank';
  flagLink.rel = 'noopener noreferrer';
  flagLink.title = `${country.ko} 위키백과로 이동`;
  flagLink.innerHTML = `<span>${flag}</span><span>${country.ko}</span>`;
  flagGrid.appendChild(flagLink);
});

const hqFlag = countryToFlag(seoulHQ.code);
const hqMarker = L.marker([seoulHQ.lat, seoulHQ.lng], { icon: hqIcon, zIndexOffset: 2000 }).addTo(map);
const hqWikiLink = makeWikiLink(seoulHQ.wikiTitle);

hqMarker.bindPopup(buildPopupHtml(seoulHQ, `✨ ${hqFlag}`, hqWikiLink), {
  closeButton: true,
  autoClose: true
});

hqMarker.on('mouseover', () => {
  activateCountryPreview(seoulHQ, hqMarker, hqFlag);
});

hqMarker.on('click', () => {
  activateCountryPreview(seoulHQ, hqMarker, hqFlag);
});

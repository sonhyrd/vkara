/**
 * Vietnamese karaoke abbreviations (DVT-style): "dmct" → "Đắp Mộ Cuộc Tình".
 * Only a whole-query match expands; a leading/trailing "karaoke" (web karaoke mode) is kept.
 * ponytail: hand-kept map; generate from playlist titles if it needs to grow past a few hundred.
 */
const ABBREVIATIONS: Record<string, string> = {
    dmct: 'Đắp Mộ Cuộc Tình',
    gt: 'Giã Từ',
    kunm: 'Ký Ức Nhạt Màu',
    stth: 'Sầu Tím Thiệp Hồng',
};

export function expandViAbbreviation(query: string): string {
    const words = query.trim().split(/\s+/);
    const isKaraoke = (w: string | undefined) => w?.toLowerCase() === 'karaoke';
    const lead = isKaraoke(words[0]) ? words.shift() : undefined;
    const trail = words.length > 1 && isKaraoke(words.at(-1)) ? words.pop() : undefined;
    const title = ABBREVIATIONS[words.join(' ').toLowerCase()];
    if (!title) return query;
    return [lead, title, trail ?? (lead ? undefined : 'karaoke')].filter(Boolean).join(' ');
}

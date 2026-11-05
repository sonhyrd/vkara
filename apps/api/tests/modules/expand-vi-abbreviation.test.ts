import { expect, test } from 'vitest';

import { expandViAbbreviation } from '@/modules/youtube/expand-vi-abbreviation';

test('expands whole-query Vietnamese abbreviations', () => {
    expect(expandViAbbreviation('dmct')).toBe('Đắp Mộ Cuộc Tình karaoke');
    expect(expandViAbbreviation('karaoke GT')).toBe('karaoke Giã Từ');
    expect(expandViAbbreviation('kunm karaoke')).toBe('Ký Ức Nhạt Màu karaoke');
    expect(expandViAbbreviation('gt remix')).toBe('gt remix');
    expect(expandViAbbreviation('karaoke')).toBe('karaoke');
});

import type { CuratedCatalog } from '@vkara/curated-playlists';

export type CuratedCatalogLabels = {
    bolero: string;
    'nhac-vang': string;
    'song-ca': string;
    'que-huong': string;
    karaoke: string;
    music: string;
};

export function getCuratedCatalogLabel(
    catalog: CuratedCatalog,
    labels: CuratedCatalogLabels,
): string {
    return Object.hasOwn(labels, catalog.id)
        ? labels[catalog.id as keyof CuratedCatalogLabels]
        : catalog.id;
}

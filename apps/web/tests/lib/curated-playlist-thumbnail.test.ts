import { describe, expect, it } from 'vitest';

import { resolveCuratedPlaylistThumbnail } from '@/lib/curated-playlist-thumbnail';
import type { PlaylistDetailsResponse, YouTubeVideo } from '@vkara/youtube';

const PLAYLIST_ID = 'PLRH1bes7ddmVMYRkmPNJY4lFZsGlAAXbC';

function makeVideo(id: string, thumbnails: YouTubeVideo['thumbnails']): YouTubeVideo {
    return {
        id,
        title: 'First song',
        duration: 0,
        duration_formatted: '0:00',
        type: 'video',
        uploadedAt: '',
        url: `https://www.youtube.com/watch?v=${id}`,
        views: 0,
        channels: [],
        thumbnails,
    };
}

function makeDetails(overrides: Partial<PlaylistDetailsResponse> = {}): PlaylistDetailsResponse {
    return {
        playlist: {
            id: PLAYLIST_ID,
            title: 'Test playlist',
            videoCount: 2,
            thumbnails: [],
        },
        videos: [],
        ...overrides,
    };
}

describe('resolveCuratedPlaylistThumbnail', () => {
    it('ignores playlist art and uses first video thumbnail with its id', () => {
        const videoUrl = 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg';
        const details = makeDetails({
            playlist: {
                id: PLAYLIST_ID,
                title: 'Test',
                videoCount: 1,
                thumbnails: [
                    { url: 'https://i.ytimg.com/vi/x/hqdefault.jpg?sqp=a&rs=b', width: 480, height: 270 },
                ],
            },
            videos: [makeVideo('dQw4w9WgXcQ', [{ url: videoUrl, width: 320, height: 180 }])],
        });

        expect(resolveCuratedPlaylistThumbnail(details)).toEqual({
            src: videoUrl,
            videoId: 'dQw4w9WgXcQ',
        });
    });

    it('returns null when no details or no videos', () => {
        expect(resolveCuratedPlaylistThumbnail(undefined)).toBeNull();
        expect(resolveCuratedPlaylistThumbnail(makeDetails())).toBeNull();
    });
});

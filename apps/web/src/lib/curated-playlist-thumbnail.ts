import type { PlaylistDetailsResponse } from '@vkara/youtube';
import { getYouTubeThumbnailUrl } from '@vkara/youtube';

/**
 * Playlist card image: first track's thumbnail. YouTube's playlist art is either a
 * synthetic `/vi/<listId>/` URL (404) or a signed `?sqp=…&rs=…` URL that expires in cache.
 */
export function resolveCuratedPlaylistThumbnail(
    details: PlaylistDetailsResponse | undefined,
): { src: string; videoId: string } | null {
    const firstVideo = details?.videos[0];
    if (!firstVideo) {
        return null;
    }
    return {
        src: getYouTubeThumbnailUrl(firstVideo.thumbnails, 'list', firstVideo.id),
        videoId: firstVideo.id,
    };
}

import { expect, test } from 'vitest';

import { isExperimentsEnabledOnWeb } from '../src/experiments';

test('web experiments flag never reads the server-only key', () => {
    // Mirrors @t3-oss/env-nextjs on the client: server keys throw.
    const clientEnv = (value?: string) =>
        new Proxy({ NEXT_PUBLIC_VKARA_EXPERIMENTS: value } as never, {
            get(target, key) {
                if (key === 'VKARA_EXPERIMENTS') throw new Error('server env on client');
                return (target as Record<string | symbol, unknown>)[key];
            },
        });
    expect(isExperimentsEnabledOnWeb(clientEnv())).toBe(false);
    expect(isExperimentsEnabledOnWeb(clientEnv('1'))).toBe(true);
});

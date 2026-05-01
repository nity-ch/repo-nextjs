'use client';

import { useState } from 'react';
import { Button, Card } from '@nity/ui';
import { formatDate } from '@nity/utils';

export default function Page() {
  const [n, setN] = useState(0);
  return (
    <main style={{ padding: 32, fontFamily: 'system-ui, sans-serif' }}>
      <Card title="Next.js + @nity/ui (source TSX)">
        <p>Imported directly from sibling repo source. No build step.</p>
        <p>Count: {n}</p>
        <p style={{ color: '#666', fontSize: 13 }}>Today: {formatDate(new Date())}</p>
        <Button onClick={() => setN((v) => v + 1)}>Increment</Button>{' '}
        <Button variant="ghost" onClick={() => setN(0)}>
          Reset
        </Button>
      </Card>
    </main>
  );
}

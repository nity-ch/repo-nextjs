'use client';

import { useState } from 'react';
import { Button, Card } from '@playground/ui';

export default function Page() {
  const [n, setN] = useState(0);
  return (
    <main style={{ padding: 32, fontFamily: 'system-ui, sans-serif' }}>
      <Card title="Next.js + @playground/ui (source TSX)">
        <p>Imported directly from sibling repo source. No build step.</p>
        <p>Count: {n}</p>
        <Button onClick={() => setN((v) => v + 1)}>Increment</Button>{' '}
        <Button variant="ghost" onClick={() => setN(0)}>
          Reset
        </Button>
      </Card>
    </main>
  );
}

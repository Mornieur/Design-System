import type { ReactNode } from 'react';
import DocsSidebar from '@/app/_components/DocsSidebar';

type DocsScaffoldProps = {
  children: ReactNode;
};

export default function DocsScaffold({ children }: DocsScaffoldProps) {
  return (
    <main id="main-content" className="site-main">
      <div className="page-shell docs-layout">
        <DocsSidebar />
        <div className="docs-content">{children}</div>
      </div>
    </main>
  );
}

import HomeEditorialPreviews from '@/app/_components/HomeEditorialPreviews';
import HomeHeroPanel from '@/app/_components/HomeHeroPanel';
import {
  componentEntries,
  featuredComponents
} from '@/app/_content/components';
import { foundationEntries } from '@/app/_content/foundations';
import { homeHighlights, siteMetadata } from '@/app/_content/site';

export default function Home() {
  return (
    <main id="main-content" className="site-main">
      <div className="page-shell">
        <HomeHeroPanel
          description={siteMetadata.description}
          highlights={homeHighlights}
          shortTitle={siteMetadata.shortTitle}
        />
        <HomeEditorialPreviews
          componentEntries={componentEntries}
          featuredComponents={featuredComponents}
          foundationEntries={foundationEntries}
        />
      </div>
    </main>
  );
}

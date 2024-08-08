import SEO from '@/components/seo';
import { Button } from '@/components/ui/button';
import { Link } from '@/router';

export default function TestPage() {
  return (
    <>
      <SEO title="Test Page" />

      <section className="grid min-h-screen place-items-center">
        <div>
          <h1 className="text-center">Test Page for Seo</h1>
          <Link to="/" className="mx-auto">
            <Button className="mt-4" variant={'destructive'}>
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

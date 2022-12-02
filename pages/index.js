import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Ramilya. I'm a software enginer. This is my blog and I'm learning React and NextJS.</p>
        <p>
          Follow me on <a href="https://www.instagram.com/ramilyanigmatullina/" target="_blank">Instagram</a>.
        </p>
      </section>
    </Layout>
  );
}
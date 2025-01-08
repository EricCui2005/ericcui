import Head from 'next/head';

export default function CustomHead() {
  return (
    <>
      <Head>
        <title>Eric Cui</title>
        <meta
          name="description"
          content="Eric Cui's personal web page. Eric is an computer science major at Stanford University looking to write practical code and build impactful tools."
        />
        <meta
          name="keywords"
          content="Stanford, Stanford University, Computer Science, Eric Cui, Software Engineer"
        />
        <meta name="author" content="Eric Cui" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  );
}

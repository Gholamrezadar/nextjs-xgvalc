import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind Minify Validation</title>
      </Head>
      <p className="m-2">styles used are:</p>
      <ol className="m-2 list-decimal list-inside">
        <li>bg-red-200</li>
        <li>bg-red-300</li>
        <li>bg-red-400</li>
        <li>bg-red-500</li>
        <li>bg-red-600</li>
        <li>w-24</li>
        <li>h-24</li>
        <li>rounded-md</li>
        <li>m-2</li>
        <li>list-disc</li>
        <li>list-inside</li>
      </ol>

      <div className="bg-red-200 w-24 h-24 m-2 rounded-md"></div>
      <div className="bg-red-300 w-24 h-24 m-2 rounded-md"></div>
      <div className="bg-red-400 w-24 h-24 m-2 rounded-md"></div>
      <div className="bg-red-500 w-24 h-24 m-2 rounded-md"></div>
      <div className="bg-red-600 w-24 h-24 m-2 rounded-md"></div>
    </div>
  );
}

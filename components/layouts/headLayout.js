import Head from "next/head"; 

export default function HeadLayout({title,styleLink}) {
    return (
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
            <link rel="stylesheet" href={styleLink}></link>
        </Head>
    );
}
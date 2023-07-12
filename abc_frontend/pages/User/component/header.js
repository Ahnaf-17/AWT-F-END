import Head from "next/head";
export default function Header(props){
    return(
        <>
        <Head>
            <title>{props.title}</title>
            <link rel="icon" type="image/x-icon" href="/ico.svg"></link>
        </Head>  

        {/* <Link href="/">Home</Link>
        <Link href="/about">About</Link> */}
        </>
    )
}
import Head from "next/head";
import { connectToDatabase } from "../lib/mongodb";
import "swagger-ui-react/swagger-ui.css";
import { CssBaseline } from "@material-ui/core";
import DenseAppBar from "../components/appbar";
import FormComponent from "../components/form";

export default function Home({ isConnected }) {
  return (
    <>
      <CssBaseline />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <DenseAppBar />
      <FormComponent />
      <div className="container">
        <main></main>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { client } = await connectToDatabase();

  const isConnected = await client.isConnected();

  return {
    props: { isConnected },
  };
}

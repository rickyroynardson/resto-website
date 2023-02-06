import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";

export default function Index(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Layout>
                <h1 className="text-3xl">Role</h1>
            </Layout>
        </>
    );
}

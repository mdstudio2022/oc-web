import Header from "../../components/indexpage/header";
import Firstblock from "../../components/indexpage/firstblock";
import Secblock from "../../components/indexpage/secblock";
import Thirdblock from "../../components/indexpage/thirdblock";
import Footer from "../../components/indexpage/footer";
import React from "react";
export default function Indexpage() {
    const body = (
        <>
            <Header />
            <Firstblock />
            <Thirdblock />
            <Secblock />
            <Footer />
        </>
    );
    return(
        <main className="main_index">
            {body}
        </main>
    );
}
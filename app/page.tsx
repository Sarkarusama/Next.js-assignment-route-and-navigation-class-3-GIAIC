"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

export default function Home() {
  const route = useRouter();
  return (
    <>
      <Navbar />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex
        voluptate minus suscipit earum animi asperiores consectetur eum? Tenetur
        error necessitatibus eius perferendis cupiditate deserunt facere quae
        sunt animi sequi, harum veniam fugiat cumque commodi quibusdam vel
        beatae voluptate illo quaerat autem voluptatibus molestiae soluta minus!
        Est nisi possimus veniam, a blanditiis neque debitis esse. Dicta dolor
        distinctio doloribus. Aut reiciendis totam aperiam eos, nostrum
        accusantium blanditiis doloribus iusto eius ducimus natus quo quos
        soluta autem. Et delectus dolore illo inventore, ex earum porro enim,
        veritatis sit repellat saepe, laudantium adipisci ullam vitae explicabo
        nulla nihil vero molestiae quam perspiciatis quos quae ut. Sit
        architecto iste ab omnis provident ex dolores asperiores perspiciatis ea
        iure deleniti, vitae aspernatur molestiae deserunt neque. Necessitatibus
        cumque exercitationem voluptatem, dolorum saepe quae blanditiis
        perferendis possimus non nesciunt aperiam cupiditate veritatis iusto
        nihil sint commodi quisquam deleniti. Aliquam ipsum esse laudantium ipsa
        autem! Eveniet suscipit fugit sapiente quasi eligendi voluptatum sequi
        iste hic inventore, quibusdam facere similique cum nobis praesentium
        vitae magni assumenda nihil quod culpa consectetur veritatis veniam
        reprehenderit? Laudantium voluptatum, fugiat veritatis, voluptate animi
        aspernatur est minus officia aliquid laboriosam ut maiores nemo! Dolore
        vel reprehenderit dignissimos exercitationem animi incidunt impedit enim
        culpa perspiciatis odio ducimus ut vero nisi tempore, obcaecati
        repudiandae labore aliquam saepe rem a voluptate quasi quae facilis?
        Repudiandae tenetur quibusdam veritatis asperiores saepe. Sequi debitis
        expedita natus, beatae blanditiis reiciendis eos sed dicta! Illo
        veritatis magni voluptate, non fugiat minus modi quisquam maxime laborum
        corporis vero beatae reprehenderit cum. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Architecto, in? At, culpa enim! Ratione
        ullam aliquam, dolorem beatae ab fugit similique qui eveniet non fuga
        minima obcaecati, dicta est architecto. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Rem, aspernatur? Possimus aperiam,
        accusamus distinctio fugiat rem nostrum itaque optio veritatis
        reiciendis, eum vitae nesciunt eveniet, iste nemo excepturi ducimus ut
      </p><br/><br/>
      <button onClick={() => {route.push("/nextPage");}}>See more</button><br/><br/>
      <Footer />
    </>
  );
}

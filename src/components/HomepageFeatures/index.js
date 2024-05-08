import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "Minerva-350M-base-v1.0 ",
    img: require("@site/static/img/minerva-logos-350M.png").default,
    description: (
      <>
        This compact model is <b>fast and agile</b>, making it ideal for
        applications requiring quick responses and lower computational
        resources. With dual-language training in Italian and English, it's{" "}
        <u>perfectly suited for fine-tuning tasks</u> in specialized domains
        where tailored responses are crucial.
      </>
    ),
    link: "https://huggingface.co/sapienzanlp/Minerva-350M-base-v1.0",
  },
  {
    title: "Minerva-1B-base-v1.0 ",
    img: require("@site/static/img/minerva-logos-1B.png").default,
    description: (
      <>
        Featuring a <b>balanced blend of depth and speed</b>, this 1
        billion-parameter model provides a robust framework for a variety of
        applications. It strikes an effective balance between performance and
        resource consumption, making it{" "}
        <u>
          suitable for developing more complex, multi-faceted language tasks
          without extensive computational overhead.
        </u>
      </>
    ),
    link: "https://huggingface.co/sapienzanlp/Minerva-1B-base-v1.0",
  },
  {
    title: "Minerva-3B-base-v1.0 ",
    img: require("@site/static/img/minerva-logos-3B.png").default,
    description: (
      <>
        This <b>powerful and comprehensive model</b> is trained on an extensive
        corpus of Italian and English text, enabling sophisticated understanding
        and generation of language. With its vast knowledge base and deep
        learning capabilities, it is{" "}
        <u>
          optimized for delivering high-quality, general-purpose language
          solutions
        </u>{" "}
        across a broad range of contexts and applications.
      </>
    ),
    link: "https://huggingface.co/sapienzanlp/Minerva-3B-base-v1.0",
  },
];

// A list of newsarticles headlines and links to showcase in the homepage.
const NewsList = [
  {
    img: require("@site/static/img/ansa-logo.png").default,
    description: (
      <>
        <p>
          <em>"Ecco Minerva, la prima famiglia di LLM addestrati da zero in italiano."</em>
        </p>
        <p>
          <a href="https://www.ansa.it/osservatorio_intelligenza_artificiale/notizie/approfondimenti/2024/04/23/ecco-minerva-la-prima-famiglia-di-llm-addestrati-da-zero-in-italiano_ac6cc4b0-6c65-4cef-a7e3-dfca7bc3c2c4.html">
            Read more!
          </a>
        </p>
      </>
    ),
  },
  {
    img: require("@site/static/img/rai-logo.png").default,
    description: (
      <>
        <p>
          <em>"Minerva, il nuovo modello di intelligenza artificiale con 500 miliardi di parole."</em>
        </p>
        <p>
          <a href="https://www.rainews.it/tgr/lazio/articoli/2024/04/minerva-il-nuovo-modello-di-intelligenza-artificiale-con-500-miliardi-di-parole-46aa10ba-929c-46e9-9469-69b097a26875.html">
            Read more!
          </a>
        </p>
      </>
    ),
  },
  {
    img: require("@site/static/img/fair-logo.png").default,
    description: (
      <>
        <p>
          <em>"AI made in Italy: arriva Minerva, la prima famiglia di grandi modelli linguistici addestrati “da zero” per la lingua italiana."</em>
        </p>
        <p>
          <a href="https://fondazione-fair.it/news/ai-made-in-italy-arriva-minerva-la-prima-famiglia-di-grandi-modelli-linguistici-addestrati-da-zero-per-la-lingua-italiana/">
            Read more!
          </a>
        </p>
      </>
    ),
  },
];

function Feature({ img, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} src={img} alt="Example banner" />
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link}>
          <Heading as="h3">{title}</Heading>
        </a>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center">
          Minerva is the first family of{" "}
          <b>LLMs pretrained from scratch on Italian</b> developed by{" "}
          <a href="https://nlp.uniroma1.it/">Sapienza NLP</a> in collaboration
          with{" "}
          <a href="https://fondazione-fair.it/">
            Future Artificial Intelligence Research (FAIR)
          </a>{" "}
          and <a href="https://www.cineca.it/">CINECA</a>. The{" "}
          <u> Minerva models are truly-open </u> (data and model)
          Italian-English LLMs, with approximately half of the pretraining data
          composed of Italian text.
          <br/><br/>
          Stay tuned for the{" "}
          <Link to="/blog/welcome">technical report</Link> on Minerva!
        </div>

        <div style={{ textAlign: "center" }}>
          <Heading as="h2" style={{ marginTop: "4rem" }}>Our Minerva Models</Heading>
        </div>

        <div className="row" style={{ marginTop: "2rem", justifyContent: "center" }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        <hr style={{ marginTop: "2rem" }} />

        <div style={{ textAlign: "center" }}>
          <Heading as="h2" style={{ marginTop: "4rem" }}>News about Minerva</Heading>
        </div>
        
        <div className="row" style={{ marginTop: "2rem", justifyContent: "center" }}>
          {NewsList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

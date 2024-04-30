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
          <b>
            truly open (data and model) Italian-English LLMs pretrained from
            scratch
          </b>{" "}
          developed by <a href="https://nlp.uniroma1.it/">Sapienza NLP</a> in
          collaboration with{" "}
          <a href="https://fondazione-fair.it/">
            Future Artificial Intelligence Research (FAIR)
          </a>{" "}
          and <a href="https://www.cineca.it/">CINECA</a>.{" "}
          <u>
            Notably, approximately half of its pretraining data includes Italian
            text!
          </u>
          <br />
          If you want to know more about Minerva check the{" "}
          <Link to="/blog/welcome">blogtechnical report blog post!</Link>
        </div>

        <div className="row" style={{ marginTop: "2rem" }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

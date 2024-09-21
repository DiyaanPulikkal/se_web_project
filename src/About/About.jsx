import style from "./About.module.css";
import TextSection from "./TextSection.jsx";
function About() {
  const heading1 = "What is Software Engineering?";
  const content1 = (
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software
      engineering (SE) is an engineering discipline concerning all aspects of
      software production, including software analysis, design, development,
      testing, and deployment. SE requires profound abstract and logical
      thinking and the application of mathematics, logic, and computer science
      in order to produce efficient and reliable software with the available
      resources
    </p>
  );

  const heading2 = "Why Study Software Engineering?";
  const content2 = (
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It
      is hard to overstate the ubiquity of software nowadays. Every computer
      system is governed by software. Almost every human activity involves
      software in some form. Undoubtedly software industry is one of the largest
      and fastest growing industries in the world. Consequently, skilled
      software engineers are in high demand worldwide. As software becomes more
      and more complex, the programming skills and the rudimentary knowledge of
      software engineering that students obtained from traditional computer
      science and computer engineering curriculums are insufficient. The
      development of real-world software applications requires the skills in
      analysing the problem domain and the customer's requirement and the skills
      in designing the software from the topmost level down to the
      implementation level. Moreover, a software engineer must be able to use
      proper tools, techniques, and methodologies in order to produce the
      software in an efficient manner.
    </p>
  );

  const heading3 = "Why students choose KMITL?";
  const content3 = (
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KMITL's
      Software Engineering program stands out for its strong technical
      foundation, practical learning approach, and industry connections. Known
      as one of Thailand's top engineering institutes, KMITL offers a
      well-rounded curriculum covering core areas of software development and
      emerging fields like AI and cybersecurity. Students benefit from modern
      labs, industry-sponsored projects, and internship opportunities, all of
      which provide real-world experience. With international partnerships, a
      vibrant student community, and a focus on innovation, KMITL fosters an
      environment conducive to both academic excellence and career readiness,
      making it a competitive choice for aspiring software engineers.
    </p>
  );

  const heading4 = "Career Opportunities";
  const content4 = (
    <>
      <p>
        There are abundant career opportunities for graduates from the software
        engineering program.
      </p>
      <ul>
        <li>
          Software engineers, software architects, and software developers on
          various platforms, including enterprise software, web applications,
          mobile applications, games, embedded applications, etc.
        </li>
        <li>Analysts and designers of IT systems, IT consultants</li>
        <li>Software entrepreneurs</li>
      </ul>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With
        strong foundation in computer science, mathematics, and software
        engineering principles, graduates of the SE program may continue their
        studies at postgraduate level in various software engineering or
        computing related fields in universities worldwide.
      </p>
    </>
  );

  const headingArr = [heading1, heading2, heading3, heading4];
  const contentArr = [content1, content2, content3, content4];

  return (
    <div className={style.spacebelowInAbout}>
      {/* <h1 className={style.heading}>About</h1> */}
      {contentArr.map((content, i) => {
        return (
          <TextSection
            key={i}
            index={i + 1}
            content={content}
            heading={headingArr[i]}
          />
        );
      })}
    </div>
  );
}

export default About;

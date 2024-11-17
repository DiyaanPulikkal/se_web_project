import style from "./Admission.module.css";
import info from "./assets/info.png";
import Timeline from "./Timeline.jsx";
import { useEffect } from 'react';
import { useState ,useRef} from "react";


function Admission(props) {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component loads
  }, []);

  const [isOpen1, setIsOpen1] = useState(false);
  const contentRef1 = useRef(null);

  const toggleAccordion1 = () => {
      setIsOpen1(!isOpen1);
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const contentRef2 = useRef(null);

  const toggleAccordion2 = () => {
      setIsOpen2(!isOpen2);
  };

  const [isOpen3, setIsOpen3] = useState(false);
  const contentRef3 = useRef(null);

  const toggleAccordion3 = () => {
      setIsOpen3(!isOpen3);
  };

  return (
    <>
      <h1 className="pageHeading">Admission</h1>
      <h2 className={style.sectionHeading}> <img src={info} />Admission Timeline (2025, Real-time)</h2>
      <div className={style.timelineDiv}>
        <Timeline />
      </div>
      <div className={style.mainmainDiv}>
        <div className={style.mainDiv}>
            <h2 onClick={toggleAccordion1} className={style.accordionHeader}>
                Early Round
                <span className={`${style.accordionIcon} ${isOpen1 ? style.open : ""}`}>
                →
                </span>
            </h2>

            <div
                ref={contentRef1}
                className={`${style.accordionContent} ${
                isOpen1 ? style.accordionContentOpen : ""
                }`}
                style={{
                maxHeight: isOpen1 ? `${contentRef1.current.scrollHeight + 1000}px` : "0px",
                }}
            >
              <div className={style.activityContainer}>
                <div className={style.applicationFilling}>
                    <h2>Application filing and Application Fee PaymentPeriod.</h2>
                    <p> : October 1 - October 27, 2023</p>
                </div>
                
                <div className={style.Interview}>
                    <h2>Interview Candidate Notification</h2>
                    <p> : November 7, 2023</p>
                </div>
                
                <div className={style.minimumstudent}>
                    <h2>The minimum number of accepted students: <span className={style.redRemark}>50</span></h2>
                    <p>Remark: *The minimum number of accepted applicants may subject to change if candidates'
                    qualification does not meet the programs' minimum requirements.</p>
                </div>
                

                <h2>2. Application Requirements</h2>
                <div className={style.requirement}>
                    <h3 className={style.Section2_1Main}>2.1. Bachelor's Requirements (Based on KMITL)</h3>
                    <div className={style.Section2_1}>
                        <h3>2.1.1 Educational background</h3>
                        <p>The applicant must satisfy at least one of the following requirements:</p>
                        <ul>
                          <li>Graduated or studying in Matthayom 6.</li>
                          <li>Graduated in qualification equivalent to Matthayom 6 as approved by the Ministry of Education.(The applicants who submit this educational background, please contact SIIE office.)</li>
                          <li>Graduated or studying at an accredited college or higher-education institution in Thailand oraboard.</li>
                        </ul>

                        <h3>2.1.2 Academics Record</h3>
                        <p>The applicant should submit at least one of the following standardized test results and obtain a
                        score which meet the minimum requirements as specified below:</p>
                        <ul>
                          <li>SAT I : 1020</li>
                          <li>GSAT : 1020</li>
                          <li>School Letter : GPA at least 4 semesters in the class rank  of 75th percentile</li>
                          <li>ACT : 19</li>
                          <li>IB Diploma : 29</li>
                          <li>Any national higher  education  board exam result : A Level, Gaokao, GAT/PAT, National Exam</li>
                        </ul>

                        <p><span className={style.redRemark}>Remark: *</span>The applicants for Software Engineering are required to meet one ofthese additional requirements.</p>
                        <ul>
                          <li>SAT or GSAT Math score of 600 or higher</li>
                          <li>SAT subject test Math Level 1 or Math Level 2 score of 600 or higher</li>
                          <li>ACT Math score of 23 or higher</li>
                          <li>IB Diploma score for a subject in Mathematics with a score of 5 or higher</li>
                          <li> AP test for a subject in Mathematics with a score of 4 or higher</li>
                          <li>A-Level or AS-Level for a subject in Mathematics with grade B or above</li>
                          <li>A-Level Mathematics 1 (TCAS) with a score of 30 or higher</li>
                          <li>Cumulative GPA of all Math subjects in high school at least 3 out of 4 (or equivalent)</li>
                        </ul>

                        <h3>2.1.3 Language Requirement (for non-native English speakers)</h3>
                        <p>The applicant should submit at least one of the following English proficiency Test scores and
                        obtain a score which meets the minimum requirement specified below:</p>
                        <ul>
                          <li>TOEFL — paper-based : 550</li>
                          <li>TOEFL — CBT : 213</li>
                          <li>TOEFL — IBT : 79</li>
                          <li>IELTS : 6</li>
                          <li>Cambridge English Exam FCE or CAE or CPE : 170</li>
                          <li>IB — English A1 or A2 : 4</li>
                          <li>IB — English B (HL) : 5</li>
                          <li>KMITL-TEP : B2</li>
                        </ul>
                        <h2 className={style.redRemark}>Remark:</h2>
                        <ol>
                          <li>Applicants who have an English proficiency score meeting with minimum or over
                            requirement can be admitted without conditions (The score has to be valid not more than 2 years from
                            the date of application deadline).
                          </li>
                          <li>Applicants who do not submit any English proficiency test score or have lower than the
                            required can be conditionally accepted by enrolling in additional English as a Second
                            Language (ESL) courses at KMITL in the first semester
                          </li>
                        </ol>   

                        <h3>2.1.4 Personal Statement</h3>
                        <p>Please write an essay (500 words or fewer) that demonstrates your ability to communicate your
                        thoughts and your related experience in the field of study</p>

                        <h3>2.1.5 Two Recommendation Letters</h3>
                        <p>The applicant should upload PDFs or JPG snapshots of the letters of recommendation from your
                        advisors or teachers.</p>  
                    </div>
                    
                </div>
                

                <h3>Tuition Fees : 90,000 THB</h3>

                <p>This is <a href="https://reg.kmitl.ac.th/TCAS_old/news/files/2567_1_news1_2973_2023_10_27-09-34-55_a56b7.pdf" target="_blank" rel="noopener noreferrer">Official Document</a> for Early Round.</p>
              </div>
            </div>
      </div>
      <div className={style.mainDiv}>
            <h2 onClick={toggleAccordion2} className={style.accordionHeader}>
                First Round
                <span className={`${style.accordionIcon} ${isOpen2 ? style.open : ""}`}>
                →
                </span>
            </h2>

            <div
                ref={contentRef2}
                className={`${style.accordionContent} ${
                isOpen2 ? style.accordionContentOpen : ""
                }`}
                style={{
                maxHeight: isOpen2? `${contentRef2.current.scrollHeight}px` : "0px",
                }}
            >
                <div className={style.activityContainer}>
                  <div className={style.applicationFilling}>
                    <h2>Application filing and Application Fee Payment Period</h2>
                    <p> : December 25 - January 10, 2024</p>
                  </div>
                  
                  <div className={style.Interview}>
                    <h2>Interview Candidate Notification</h2>
                    <p> : January 15, 2024</p>
                  </div>

                  <div className={style.minimumstudent}>
                    <h2>The minimum number of accepted students: <span className={style.redRemark}>25</span></h2>
                    <p>Remark: *The minimum number of accepted applicants may subject to change if candidates'
                    qualification does not meet the programs' minimum requirements.</p>
                  </div>



                  <h2>2. Application Requirements</h2>
                  <div className={style.requirement}>
                    <h3 className={style.Section2_1Main}>2.1. Bachelor's Requirements (Based on KMITL)</h3>
                    <div className={style.Section2_1}>
                      <h3>2.1.1 Educational background</h3>
                      <p>The applicant must satisfy at least one of the following requirements:</p>
                      <ul>
                        <li>Graduated or studying in Matthayom 6.</li>
                        <li>Graduated in qualification equivalent to Matthayom 6 as approved by the Ministry of Education.(The applicants who submit this educational background, please contact SIIE office.)</li>
                        <li>Graduated or studying at an accredited college or higher-education institution in Thailand oraboard</li>
                      </ul>

                      <h3>2.1.2 Academics Record</h3>
                      <p>The applicant should submit at least one of the following standardized test results and obtain a
                      score which meet the minimum requirements as specified below:</p>
                      <ul>
                        <li>SAT I : 1020</li>
                        <li>GSAT : 1020</li>
                        <li>School Letter : GPA at least 4 semesters in the class rank  of 75th percentile</li>
                        <li>ACT : 19</li>
                        <li>IB Diploma : 29</li>
                        <li>Any national higher  education  board exam result : A Level, Gaokao, TGAT/TPAT, National Exam</li>
                      </ul>

                      <p><span className={style.redRemark}>Remark: *</span>The applicants for Engineering are required to meet one ofthese additional requirements.</p>
                      <ul>
                        <li>SAT or GSAT Math score of 600 or higher</li>
                        <li>ACT Math score of 23 or higher</li>
                        <li>IB Diploma score for a subject in Mathematics with a score of 5 or higher</li>
                        <li>A-Level or AS-Level for a subject in Mathematics with grade B or above</li>
                        <li>A-Level Mathematics 1 (TCAS) with a score of 30 or higher</li>
                        <li>Cumulative GPA of all Math subjects in high school at least 3 out of 4 (or equivalent)</li>
                      </ul>

                      <h3>2.1.3 Language Requirement (for non-native English speakers)</h3>
                      <p>The applicant should submit at least one of the following English proficiency Test scores and
                      obtain a score which meets the minimum requirement specified below:</p>
                      <ul>
                        <li>TOEFL — paper-based : 550</li>
                        <li>TOEFL — CBT : 213</li>
                        <li>TOEFL — IBT : 79</li>
                        <li>IELTS : 6</li>
                        <li>Cambridge English Exam FCE or CAE or CPE : 170</li>
                        <li>IB — English A1 or A2 : 4</li>
                        <li>IB — English B (HL) : 5</li>
                        <li>KMITL-TEP : B2</li>
                      </ul>
                      <h2 className={style.redRemark}>Remark:</h2>
                      <ol>
                        <li>Applicants who have an English proficiency score meeting with minimum or over
                          requirement can be admitted without conditions (The score has to be valid not more than 2 years from
                          the date of application deadline).
                        </li>
                        <li>2. Applicants who do not submit any English proficiency test score or have lower than the
                          required can be conditionally accepted by enrolling in additional English as a Second
                          Language (ESL) courses at KMITL in the first semester
                        </li>
                      </ol>   

                      <h3>2.1.4 Personal Statement</h3>
                      <p>The applicant should write an essay (600 words or fewer) that demonstrates your ability to communicate your thoughts and your related experience in the field of study.</p>

                      <h3>2.1.5 Two Recommendation Letters</h3>
                      <p>The applicant should upload PDFs or JPG snapshots of the letters of recommendation from your
                      advisors or teachers.</p>
                    </div>
                  </div>

                  <h3>Tuition Fees : 90,000 THB</h3>

                  <p>This is <a href="https://reg.kmitl.ac.th/TCAS_old/news/files/2567_1_news1_3086_2023_12_13-08-34-29_fa07b.pdf" target="_blank" rel="noopener noreferrer">Official Document</a> for First Round</p>
              
                </div>
            </div>
      </div>
      <div className={style.mainDiv}>
            <h2 onClick={toggleAccordion3} className={style.accordionHeader}>
                Second Round
                <span className={`${style.accordionIcon} ${isOpen3 ? style.open : ""}`}>
                →
                </span>
            </h2>

            <div
                ref={contentRef3}
                className={`${style.accordionContent} ${
                isOpen3 ? style.accordionContentOpen : ""
                }`}
                style={{
                maxHeight: isOpen3 ? `${contentRef3.current.scrollHeight}px` : "0px",
                }}
            >
            <div className={style.activityContainer}>
              <div className={style.applicationFilling}>
                  <h2>Application filing and Application Fee Payment Period</h2>
                  <p> : March 8 - March 29, 2024</p>
              </div>

              <div className={style.Interview}>
                  <h2>Interview Candidate Notification</h2>
                  <p> : April 15, 2024</p>
              </div>
                  
              <div className={style.minimumstudent}>
                  <h2>The minimum number of accepted students: <span className={style.redRemark}>15</span></h2>
                  <p>Remark: *The minimum number of accepted applicants may subject to change if candidates'
                  qualification does not meet the programs' minimum requirements.</p>
              </div>
                  
                  <h2>2. Application Requirements</h2>
                <div className={style.requirement}>
                  
                  <h3 className={style.Section2_1Main}>2.1. Bachelor's Requirements (Based on KMITL)</h3>
                  <div className={style.Section2_1}>
                    <h3>2.1.1 Educational background</h3>
                    <p>The applicant must satisfy at least one of the following requirements:</p>
                    <ul>
                      <li>Graduated or studying in Matthayom 6.</li>
                      <li>Graduated in qualification equivalent to Matthayom 6 as approved by the Ministry of Education.(The applicants who submit this educational background, please contact SIIE office.)</li>
                      <li>Graduated or studying at an accredited college or higher-education institution in Thailand oraboard</li>
                    </ul>

                    <h3>2.1.2 Academics Record</h3>
                    <p>The applicant should submit at least one of the following standardized test results and obtain a
                    score which meet the minimum requirements as specified below:</p>
                    <ul>
                      <li>SAT I : 1020</li>
                      <li>GSAT : 1020</li>
                      <li>School Letter : GPA at least 4 semesters in the class rank  of 75th percentile</li>
                      <li>ACT : 19</li>
                      <li>IB Diploma : 29</li>
                      <li>Any national higher  education  board exam result : A Level, Gaokao, TGAT/TPAT, National Exam</li>
                    </ul>

                    <p><span className={style.redRemark}>Remark: *</span>The applicants for Engineering are required to meet one ofthese additional requirements.</p>
                    <ul>
                      <li>SAT or GSAT Math score of 600 or higher</li>
                      <li>ACT Math score of 23 or higher</li>
                      <li>IB Diploma score for a subject in Mathematics with a score of 5 or higher</li>
                      <li>AP test for a subject in Mathematics with a score of 4 or higher</li>
                      <li>A-Level or AS-Level for a subject in Mathematics with grade B or above</li>
                      <li>A-Level Mathematics 1 (TCAS) with a score of 30 or higher</li>
                      <li>Cumulative GPA of all Math subjects in high school at least 3 out of 4 (or equivalent)</li>
                    </ul>

                    <h3>2.1.3 Language Requirement (for non-native English speakers)</h3>
                    <p>The applicant should submit at least one of the following English proficiency Test scores and
                    obtain a score which meets the minimum requirement specified below:</p>
                    <ul>
                      <li>TOEFL — paper-based : 550</li>
                      <li>TOEFL — CBT : 213</li>
                      <li>TOEFL — IBT : 79</li>
                      <li>IELTS : 6</li>
                      <li>Cambridge English Exam FCE or CAE or CPE : 170</li>
                      <li>IB — English A1 or A2 : 4</li>
                      <li>IB — English B (HL) : 5</li>
                      <li>KMITL-TEP : B2</li>
                    </ul>
                    <h2 className={style.redRemark}>Remark:</h2>
                    <ol>
                      <li>Applicants who have an English proficiency score meeting with minimum or over
                        requirement can be admitted without conditions (The score has to be valid not more than 2 years from
                        the date of application deadline).
                      </li>
                      <li>2. Applicants who do not submit any English proficiency test score or have lower than the
                        required can be conditionally accepted by enrolling in additional English as a Second
                        Language (ESL) courses at KMITL in the first semester
                      </li>
                    </ol>   

                    <h3>2.1.4 Personal Statement</h3>
                    <p>The applicant should write an essay (600 words or fewer) that demonstrates your ability to communicate your thoughts and your related experience in the field of study.</p>

                    <h3>2.1.5 Two Recommendation Letters</h3>
                    <p>The applicant should upload PDFs or JPG snapshots of  the letters of recommendation from your
                    advisors or teachers.</p>
                  </div>
                </div>

                  <h3>Tuition Fees : 90,000 THB</h3>

                  <p className={style.smallCase}>This is <a href="https://reg.kmitl.ac.th/TCAS_old/news/files/2567_1_news1_3259_2024_03_01-07-59-19_343f1.pdf" target="_blank" rel="noopener noreferrer">Official Document</a> for Second Round</p>
              
            </div>
        </div>
      </div>
      </div>

      
    </>
  );
}

export default Admission;

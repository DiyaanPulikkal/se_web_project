import style from "./Program.module.css";
import glasgow_img from "./Glasgow_image.jpg";
import glasgow_stu from "./glasgow_student.jpeg";
import queenland_college from "./queensland_campus.jpg";
import queensland_stu from "./queensland_student.jpg";
import kmitl_img from "./kmitl_college.jpg";
import kmitl_insert from "./kmilt_image_insertToweb.jpg";
function Program(){


    

    // Smooth scrolling to lick element
    const smoothScroll = (event, id) => {
        event.preventDefault(); // Prevent default link behavior
    
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start' // Align the element to the top of the viewport
            });
        }
    };

    return(
        <>
            <h1 className={style.headerProgram}>Program</h1>
            <div className={style.linkBox}>
                <p>
                    <a href="#Glasgow"  onClick={(e) => smoothScroll(e, 'Glasgow')} className={style.linkToProgram}>Glasgow</a>/
                    <a href="#Queensland" onClick={(e) => smoothScroll(e, 'Queensland')} className={style.linkToProgram}>Queenland</a>/
                    <a href="#KMITL"  onClick={(e) => smoothScroll(e, 'KMITL')} className={style.linkToProgram}>KMITL</a>
                </p>
            </div>

            {/* Glasgow */}
            <div>
                <div id = "Glasgow" className={style.imageContainPicGlasgow}>
                    <img src={glasgow_img} alt="Glasgow" className={style.imageProgram} />
                    <div className={style.textOverGlasgowPic}>
                        <h6>University of Glasgow</h6>
                        <p>KMITL-Glasgow Double-Degree Program in Software Engineering</p>
                    </div>
                
                </div>
                <div className={style.AboutDiv}>    
                    <h1>ABOUT</h1>
                    <hr/>
                    <p>The University of Glasgow has been changing the world since 1451. We are a world top 100 university and a member of the prestigious Russell Group of leading UK research universities.  Our people have always been at the forefront of innovation, including eight Nobel Laureates, two UK Prime Ministers, three First Ministers of Scotland, 10 Fellows of the Royal Society and 11 Fellows of the British Academy. Our past achievements inspire our current world changers.</p>
                </div>
                <div className={style.GlasgowDoubleDiv}>
                    <h1>KMITL-Glasgow <br />Double-Degree Program </h1>
                    <hr/>
                    <p>The KMITL-Glasgow Double-Degree Program in Software Engineering is a collaboration between KMITL and the University of Glasgow, UK. The program enables qualified students who have completed Year 2 in the SE program at the International College to enter Years 3 and 4 of the Software Engineering program at the University of Glasgow's School of Computing Science. At Glasgow, the student will have an opportunity to study with world-renowned academics, as well as working on team projects with multi-national talents. This is an excellent opportunity for the students who wish to gain studying and living experience in the UK.</p>
                </div>
                <div className={style.divOfReqandFeeandIma}>
                    <div className={style.divContainImage}>
                        <img src={glasgow_stu} alt="Students of Glasgow" className={style.imagestudent_Glasgow} />
                        <div className={style.bubble1}></div>
                        <div className={style.bubble2}></div>
                        <div className={style.bubble3}></div>
                        <div className={style.bubble4}></div>
                        <div className={style.bubble5}></div>
                        <div className={style.bubble6}></div>
                        <div className={style.bubble7}></div>
                        <div className={style.bubble8}></div>
                    </div>
                    <div className={style.divRequirmentNFee}>
                        <div className={style.divRequirment}>
                            <h1>Requirement</h1>
                            <hr/>
                            <ul>
                                <li>Completed Year 2 of the B.Eng. in Software Engineering program with GPA of 3.2 or more.</li>
                                <li>IELTS score of 6.5 or more, with no subtest below 6.0.</li>
                            </ul>
                        </div>
                        <div className={style.divTutitionFee}>
                            <h1>Tuition Fees</h1>
                            <hr/>
                            <ul>
                                <li>2 years at KMITL, Tuition fee : THB 180,000 per year.</li>
                                <li>2 years at Glasgow, Tuition fee with scholarship : GBP 17,536 per year.</li>
                            </ul>
                            <p>* Rates as of Academic Year 2020. Every student joining the double-degree program is entitled to theKMITL - Glasgow Undergraduate Scholarship which provides 20% reduction from the full tuition-fee rate for international students at Glasgow University.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* queenland */}

            <div>
                <div id = "Queensland" className={style.imageContainPicGlasgow}>
                    <img src={queenland_college} alt="Queensland" className={style.imageProgram} />
                    <div className={style.textOverGlasgowPic}>
                        <h6>The University of Queensland</h6>
                        <p>KMITL-Queensland Double-Degree Program in Software Engineering</p>
                    </div>
                
                </div>
                <div className={style.AboutDiv}>    
                    <h1>ABOUT</h1>
                    <hr/>
                    <p>Ranked in the world's top 50, The University of Queensland is one of Australia's leading research and teaching institutions. Our research has global impact. We're finding solutions to the world's biggest challenges. The University of Queensland (UQ) is one of Australia’s leading research and teaching institutions. We strive for excellence through the creation, preservation, transfer and application of knowledge. For more than a century, we have educated and worked with outstanding people to deliver knowledge leadership for a better world.</p>
                </div>
                <div className={style.GlasgowDoubleDiv}>
                    <h1>KMITL-Queensland <br />Double-Degree Program</h1>
                    <hr/>
                    <p>The KMITL-Queensland Double-Degree Program in Software Engineering is a collaboration between KMITL and the University of Queensland (UQ), Australia. The program enables qualified students who have completed Year 2 in the Software Engineering program at KMITL to enter Years 3 and 4 of the Software Engineering program at the University of Queensland in Australia, and, upon completion, be awarded with software engineering degrees from both KMITL and UQ. The collaborative program aims to equip its students with advanced knowledge and skills of software engineering to prepare them for careers in the international software industry, as well as for research and postgraduate study in all computing-related fields.</p>
                </div>
                <div className={style.divOfReqandFeeandIma}>
                    <div className={style.divContainImage}>
                        <img src={queensland_stu} alt="Students of Queensland" className={style.imagestudent_Glasgow} />
                        <div className={style.bubble1}></div>
                        <div className={style.bubble2}></div>
                        <div className={style.bubble3}></div>
                        <div className={style.bubble4}></div>
                        <div className={style.bubble5}></div>
                        <div className={style.bubble6}></div>
                        <div className={style.bubble7}></div>
                        <div className={style.bubble8}></div>
                    </div>
                    <div className={style.divRequirmentNFee}>
                        <div className={style.divRequirment}>
                            <h1>Requirement</h1>
                            <hr/>
                            <ul>
                                <li>Completed Year 2 of the B.Eng. in Software Engineering program with GPA of 3.2 or more.</li>
                                <li>IELTS score of 6.5 or more, with no subtest below 6.0.</li>
                            </ul>
                        </div>
                        <div className={style.divTutitionFee}>
                            <h1>Tuition Fees</h1>
                            <hr/>
                            <ul>
                                <li>In Years 1-2, students in this double-degree program are to pay the KMITL tuition fee at the standard rate of 90,000 Baht/Semester.</li>
                                <li>In Years 3-4, students are to pay the tuition fee and other fees as set out by UQ. All students in the program will be eligible to receive special scholarships from UQ which partially cover the fees at UQ.</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            {/* KMITL */}
            <div>
                <div id = "KMITL" className={style.imageContainPicGlasgow}>
                    <img src={kmitl_img} alt="KMITL" className={style.imageProgram} />
                    <div className={style.textOverGlasgowPic}>
                        <h6>King Mongkut's Institute of Technology Ladkrabang</h6>
                        <p>B.Eng. in Software Engineering program</p>
                    </div>
                
                </div>
                <div className={style.AboutDiv}>    
                    <h1>B.Eng. in Software Engineering Program</h1>
                    <hr/>
                    <p>The B.Eng. in Software Engineering Program is a 4-year undergraduate program aiming at producing graduates who are capable of working confidently in the international software industry as well as pursuing postgraduate study and research in leading universities worldwide. The curriculum of the program is designed in accordance with the recent ACM/IEEE guideline for undergraduate curriculum in software engineering.</p>
                </div>
                <div className={style.GlasgowDoubleDiv}>
                    <h1>KMITL-Queensland <br />Double-Degree Program</h1>
                    <hr/>
                    <p>The KMITL-Queensland Double-Degree Program in Software Engineering is a collaboration between KMITL and the University of Queensland (UQ), Australia. The program enables qualified students who have completed Year 2 in the Software Engineering program at KMITL to enter Years 3 and 4 of the Software Engineering program at the University of Queensland in Australia, and, upon completion, be awarded with software engineering degrees from both KMITL and UQ. The collaborative program aims to equip its students with advanced knowledge and skills of software engineering to prepare them for careers in the international software industry, as well as for research and postgraduate study in all computing-related fields.</p>
                </div>
                <div className={style.divOfReqandFeeandIma}>
                    <div className={style.divContainImage}>
                        <img src={kmitl_insert} alt="KMITL" className={style.imagestudent_Glasgow} />
                        <div className={style.bubble1}></div>
                        <div className={style.bubble2}></div>
                        <div className={style.bubble3}></div>
                        <div className={style.bubble4}></div>
                        <div className={style.bubble5}></div>
                        <div className={style.bubble6}></div>
                        <div className={style.bubble7}></div>
                        <div className={style.bubble8}></div>
                    </div>
                    <div className={style.divRequirmentNFee}>
                        <div className={style.divRequirment}>
                            <h1>Requirement</h1>
                            <hr/>
                            <ul>
                                <li>Completed Year 2 of the B.Eng. in Software Engineering program with GPA of 3.2 or more.</li>
                                <li>IELTS score of 6.5 or more, with no subtest below 6.0.</li>
                            </ul>
                        </div>
                        <div className={style.divTutitionFee}>
                            <h1>Tuition Fees</h1>
                            <hr/>
                            <ul>
                                <li>2 years at KMITL, Tuition fee : THB 180,000 per year.</li>
                                <li>2 years at Glasgow, Tuition fee with scholarship : GBP 17,536 per year.</li>
                            </ul>
                            <p>* Rates as of Academic Year 2020. Every student joining the double-degree program is entitled to theKMITL - Glasgow Undergraduate Scholarship which provides 20% reduction from the full tuition-fee rate for international students at Glasgow University.</p>
                        </div>
                    </div>
                </div>

            </div>

            
        </>
        
    );
}

export default Program;
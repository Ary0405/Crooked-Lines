import '../Styles/About.css';
import rajat from '../Assets/Rajat_Kathuria_Photo.jpg';
import shivani from '../Assets/shivani.jpg';
import trisha from '../Assets/Trisha De Niyogi.jpg';
import Footer from './Footer';
import Navbar from '../Components/Navbar';
import CircleImg from '../Assets/home_circle_two.png';
import Home_circle_one from '../Assets/home_circle_one.png'

function About() {
    return (
        <>
            <Navbar />
            <div className='about_container'>
                <img className='about_circle_one' src={CircleImg} alt='' />
                <div className='details_container'>
                    <p className='about_heading'>About the <span className='about_competition'>Competition</span></p>
                    <p className='about_content'>
                        To foster and encourage literary and creative talent in young writers, the English department at the Shiv Nadar Institute of Eminence is organizing its first annual Short Story Writing Competition ‘Crooked Lines’. We are looking for stories that entertain the reader and reflect on the world around us. We welcome original short stories in any form, including creative nonfiction, as well as pieces that do not fit strictly into any of the usual genres. The written word is a crooked line, but a crooked line can also be an astounding break from norm. For more on how to submit, please read the guidelines carefully.
                    </p>
                </div>
                <div className='details_container jury'>
                    <div>

                        <p className='about_heading'>The Jury <span className='about_competition'>Panel</span></p>
                        <p className='about_content'> The winners from the shortlisted entries will be selected by our distinguished jury panel <span className='about_competition'>Rajat Kathuria, Shivani Mutneja, Trisha De Niyogi</span></p>
                    </div>
                    <div className='jury_main_container'>
                        <div className='jury_container'>
                            <img src={rajat} className='jury_img' alt='Rajat Kathuria'></img>
                            <p>
                                Rajat Kathuria is the Dean School of Humanities and Social Sciences, and Professor of Economics at Shiv Nadar University. He is the former Director and Chief Executive of the Indian Council for Research on International Economic Relations (ICRIER). He worked with the Telecom Regulatory Authority of India during its Initial years.  He is currently the Co-chair of the T20 Digital Task Force under India’s G20 Presidency.<br></br><br></br>
                                Rajat has over 20 years of experience in teaching and 25 years of experience in economic policy, besides research interests on a range of issues relating to regulation and competition policy. He has worked with the World Bank, Washington DC as a Consultant and carried out research assignments for a number of international organizations, including ILO, UNCTAD, LirneAsia, World Bank, and ADB. He has published in international and national journals, besides in popular magazines and newspapers. He is a founder member of the Broadband Society for Universal Access and has served on the Boards of the Delhi Management Association and the Micro Finance Institutional Network of India. He is on several governments and industry committees and has been on the research advisor council of SBI. He has an undergraduate degree in Economics from St. Stephens College, a Masters from Delhi School of Economics, and a Ph.D. degree from the University of Maryland, College Park.

                            </p>
                        </div>
                        <div className='jury_container'>
                            <img src={shivani} className='jury_img' alt='Shivani mutneja'></img>
                            <p>
                                Shivani Mutneja is Visiting Faculty at Symbiosis College of Arts and Commerce, Pune. Her poems and prose have appeared in Nether Quarterly, Jellyfish Review, Two Serious Ladies and decomp Journal among others. She is the Associate Fiction Editor at The Bombay Literary Magazine. She is working on her first novel, which has recently been selected in the mentorship program by Asian Women Writers.
                            </p>
                        </div>
                        <div className='jury_container'>
                            <img src={trisha} className='jury_img' alt='Trisha De Niyogi'></img>
                            <p>
                                Trisha De Niyogi is the Chief Operating Officer and Director at Niyogi Books, an independent publishing house based out of New Delhi, India. She was a fellow at the Istanbul fellowship Program 2020. She has also been a regular speaker at several forums and literature festivals on publishing and she writes occasional columns on Indian publishing in varied journals and newspapers.<br></br><br></br>
                                An avid reader, music aficionado and a cultural aesthete, she is a multi-faceted artist from Delhi, who is trained in Bharatnatyam and plays the piano. She is also an adviser to multiple organizations, including Heritage & Education organization called Heritageshaala and an Indian Literature initiative called Purple Pencil Project as well as a diversity and inclusion platform, Belongg.
                                Trisha holds degrees in Mathematics, Economics, Art History and Business Administration.

                            </p>
                        </div>
                    </div>

                </div>

                <div className='details_container'>
                    <p className='about_heading'>The <span className='about_competition'>Department</span></p>
                    <p className='about_content'>
                        The Department of English at Shiv Nadar Institute of Eminence came into existence in July 2011, when the university was founded. Since then, it has grown exponentially. Its faculty is highly regarded with PhDs from eminent universities such as the University of Oxford, Trinity College, Dublin, Delhi University, Jawaharlal Nehru University, Binghamton University, SOAS, University of East Anglia, EFLU Hyderabad, IIT Bombay and Monash University. They have published widely in India and abroad and have been featured at eminent conferences and literary festivals. They have also held a number of prestigious fellowships, grants and residencies. These include, among others, the Hawthornden Fellowship, the Andrew Mellon Fellowship at the Huntington Library, the Leverhulme Visiting Fellowship, the Vermont Studio Center fellowship, the Women in the Humanities Postdoctoral Writing Fellowship granted by The Oxford Research Centre in the Humanities (TORCH), the Charles Wallace India Trust fellowship, the DARIAH-eu Open Education Grant, the Rockefeller Residency at the Bellagio Center and the Can Serrat Arts Center Residency. To find out more about our faculty members, <a href='https://english.snu.edu.in/people/faculty' target='_blank' rel='noreferrer'>click here.</a> <br></br>
                    </p>
                    <p className='about_content'>
                        As a department, we seek to combine intellectual rigour with continuous innovation inside and outside the classroom. This is reflected in the wide range of our undergraduate and graduate courses. Our excellent student-teacher ratio enables us to particularly pay close attention to how our students write—to help them approach both academic and creative writing with critical rigour and imaginative reach, and to address specialist as well as general audiences effectively. Our graduate programmes come with substantial funding in the form of teaching and research assistantships. To find out more about our courses, please visit our <a href='https://english.snu.edu.in/' rel='noreferrer' target='_blank'>website.</a><br></br>
                    </p>
                    <p className='about_content'>
                        Over the years the English department has attracted a talented cohort of undergraduate and graduate students. Our graduates have gone on to secure admission in MA and PhD programmes at stellar institutions such as the University of California, Berkeley, University of Pennsylvania, University of Chicago, Arizona State University, Dartmouth College, King’s College, London, University of Edinburgh, University of California, San Diego, University College, Dublin, University of Melbourne and others. We also have alumni who are currently working in reputed organizations such as Ernst and Young, Deloitte, KPMG, Ogilvy PR Australia, Chase India, Centre for Policy Research, Azim Premji Foundation, HCL Technologies, Teach for India, Sage and others.
                        To find out more about admissions at SNU, click <a target='_blank' href='https://snuadmissions.com/' rel='noreferrer'>here </a>.
                    </p>

                </div>
                <div className='details_container'>
                    <p className='about_heading'>The <span className='about_competition'>Freewheeler</span></p>
                    <p className='about_content'>
                        Now in its 10th year of publication, The Freewheeler is the student-run annual literary magazine of the Department of English. Not only does it provide an exciting opportunity for students to explore various forms of creative writing, it also serves as a platform for budding editors and designers to hone their skills. Submissions undergo rigorous review and every issue is crafted with a great deal of emphasis on quality and originality. Back issues of The Freewheeler can be found <a href='https://snu.edu.in/news/freewheeler' rel='noreferrer' target='_blank'>here.</a>
                    </p>
                </div>
            <img className='about_circle_two' src={Home_circle_one} alt=''/>
                <div className='details_container'>
                    <p className='about_heading'>About the <span className='about_competition'>Logo</span></p>
                    <p className='about_content'>
                        The logo is an illustration by the artist Nasreen Mohamedi in graphite and ink. Born in Karachi in 1937, Nasreen’s family moved to Bombay in 1944 where she would eventually meet and befriend artists from the famed Bombay Progressive Artists’ Group. Mohamedi attended the prestigious St. Martin’s School of the Arts in London from 1954 to 1957, and then later studied in Paris from 1961 to 1963, returning to India to join the Bhulabhai Desai Institute for the Arts in Mumbai. She moved to Baroda in 1972 when she joined the Maharaj Sayajirao University, where she remained till her death in 1990.<br></br>
                        Mohamedi’s work eschews narrative or representational art in favour of lines, shapes and figures, often in graphite and ink. Her work frequently utilizes grid paper to interrogate the rigidity of the grid form and explore new ways of creating visual unity on a single plane. <br></br>
                        We would like to thank the Kiran Nadar Museum of Art (KNMA) for allowing us to use the image.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;
import React from 'react'
import ruchika from '../Assets/ruchika.jpg'
import apurva from '../Assets/apurva.jpg'
import Navbar from '../Components/Navbar'
import Footer from './Footer'
import '../Styles/SpotLight.css'
import { useParams } from 'react-router-dom'


function SpotLightContent() {
    const spotlight = [
        {
            id : 50,
            image : ruchika,
            name : 'Ruchika Aggarwal',
            position : 'Final Year, SNIoE',
            q1 : 'Please write us a small bio (200 words) introducing yourself. Please include any academic and extra-curricular achievements along with any past internships/positions and present positions held.',
            a1 : 'Hello. I am Ruchika Aggarwal, and I am currently in 4 th year. Please don’t ask me about my future plans or remind me that very less time is left to enjoy on campus. Looking back on my four years at SNIoE (of which 2 years went by in online mode), I developed a lot as a person. I am grateful for having chosen to take admission here and for facing so many experiences and opportunities that only this place could offer. My bachelor’s degree in English did force me to attend lectures that went over my head and to write and research throughout the semesters. But above all, it helped in sustaining my passion for literature and creative writing. My few achievements include being in the Dean’s List six times (got 10 sgpa once!), winning 2 nd place in Fanart Competition (conducted by the club Wordsink) and getting published in The Freewheeler twice. I won’t harp on about hard work or discipline. Rather, I would like to highlight that these accolades pushed me to achieve more and to take interest in the things I do. They personally mean a lot to me, not for the success they spell, but for the obstacles I overcame and the help I found from unexpected people.',
            q2 : 'What have you learnt from your internships/summer activities during your degree? How have you carried that experience into your life/work?',
            a2 : 'I started doing internships since my 2 nd year of college, mainly as an educational content developer and content writer. Through these online internships, I learned how to communicate and interview people, and gained extensive proofreading skills. I also had to revise my basic English grammar (remember gerunds?) and learned about Pitch Deck and startups (both unicorn and dragon exist). I did a 2-month offline internship after the completion of my 3 rd year. The struggle of commuting and bonding with colleagues gave me a concrete exposure of office life. I volunteered for Dadri Development Project and worked closely with Paulami ma’am in CDC. Along with teaching English and sharing smiles with the children of third-party staff, I got to interact and find guidance under her. I have been an OCJ with the CDC since August last year. I led the content creation team for Alumni Reunion 2022. I worked on Alumni Achievements, for which I had to interview alumni and I have highly enjoyed this experience. I understood that though I might not know everything. Still, I could learn if I tried. I should not let the fear of ignorance or the anxiety of being bad at something hold me back. I have also become aware about my strengths and weaknesses, and how to swallow both praise and criticism. Work and improve! That’s pretty much all there is to it.',
            q3 : 'Describe an experience (academic or not!) that features prominently in your memory of your time here.',
            a3 : 'I recall an almost perfect day back in November 2022. As an OCJ, I had to help organise the workshop trip to INTACH, Delhi. The trip was attended by 14 students, and I was supposed to ensure they reached near the inner gate on time, take attendance, call the drivers for transportation, distribute refreshments, and then ensure things went smoothly throughout the trip until our return to campus. I did all these tasks single-handedly. I didn’t expect to enjoy while being on duty. I struck conversations with my juniors and got to explore Lodhi Garden. The greenery shading that place, the monuments that towered around us, and the solace I found in myself despite everything that was going wrong in my life. I loved the overall experience and gained friends I still talk with warmly. I also received a lot of praise from the CDC members for my organising and leadership skills.',
            q4 : 'What do you miss most about life at university?',
            a4 : 'The independence and the simultaneous burden that comes from being responsible for yourself! I don’t think I will exactly miss it, since it is going to be a major part of my life now. But I got the first taste of it at SNIoE. Though I wish I could have done things better, it might be me just being hard on myself. The campus, the people, the ordinary yet remarkable moments- I will miss it all.',
            q5 : 'What advice would you give your juniors just beginning their lives here?',
            a5 : '(Note : I advise you to skip my advice, because I am worried it might not be that helpful). To share my experience, my first year went mostly on survival mode. I somehow navigated through friendships and academics despite my inhibitions. Slowly I realised who to trust and what to choose for myself. I realised how much situations and people are out of your control. I decided to take control of what little I could. To all of you starting your college journey, don’t forget the bigger picture. Don’t forget who you wish to be and what you wish to do. The upcoming years will make you cry, suffer, overwork, and feel lost. As long as you stand up for yourself and choose peace and love, you will be fine. Okay, it’s not really that scary or sad as I made it sound. Or is it?',
            q6 : 'What do you do for fun!',
            a6 : 'I like to read fiction. I am currently reading The Kite Runner by Khaled Hosseini. My last read was Lament by Maggie Stiefvater. I also like to play badminton. Dancing (alone in the room or during DJ nights) has kept me sane throughout college. I solve sudokus a lot. I have been self-learning Korean since 2020. I am still somewhere between beginner and intermediate level.',

        },
        {
            id : 51,
            image : apurva,
            name : 'Apurva Prasad',
            position : 'Benjamin Franklin Fellow University of Pennsylvania',
            q1 : 'Please write us a small bio (200 words) introducing yourself. Please include any academic and extra-curricular achievements along with any past internships/positions and present positions held.',
            a1 : 'Hi! My name is Apurva Prasad, and I graduated from Shiv Nadar University in 2022 with a B.A. (Research) English and a minor in Sociology. I am a Benjamin Franklin Fellow at the University of Pennsylvania, pursuing a dual- PhD in Comparative Literature and South Asia Studies. Some research questions I am interested in studying women’s writing, authorship studies and the intersections of law and literature in contemporary India. Looking back, what I find so wonderful and humbling is that I was able to hone my research interests at Shiv Nadar University. One essential outlet was the OUR initiative, where I could explore and experiment with my research interests. I was lucky to work with extraordinary and supportive mentors like Dr. Sambudha Sen and Dr. Aakriti Mandhwani for these projects. Beyond academics, I was involved in the literary society of SNU words.ink and was a member of the Student Senate as a Class Representative in my 2 nd year. Both experiences were incredible learning experiences. Being a part of words.ink was an exceptionally wonderful experience. I grew alongside this vibrant community in the capacity of a member and later as a secretary in my 3 rd year. It was a highlight of my time at SNU.',
            q2 : 'What have you learnt from your internships/summer activities during your degree? How have you carried that experience into your life/work?',
            a2 : 'I think the summer is a wonderful space to build on any interests/projects you have in mind outside the bounds of a strict university schedule. Over the summers, I would often partake in online courses/seminars on platforms like Edx and Coursera that were around topics of my interest. I particularly enjoyed a Harvard Edx course. The summer was also a productive space for me to think about my OUR projects and explore research possibilities that interested me before approaching a professor. Since two of my three summers at the university were virtual, I did an online campus job with Shiv Nadar University’s admissions and outreach team. It was a really great experience and allowed me to understand what it meant to be a part of a corporate team, meet deadlines and coordinate among numerous people. These OCJs (On Campus Jobs) are worth looking out for! Finally, through the summer and my final year at SNU (Most of which was virtual, barring the last 2-3 months), I volunteered virtually for the U&amp;I teaching program, where individuals volunteer 3-4 hours of the time every week to take a class for students from socio-economically weaker backgrounds. This was a rich, meaningful and transformative experience. The NGO I was linked to was the Delhi-based organization Sankalp. I love working with children and this provided a space to interact, assist and learn from them.',
            q3 : 'Describe an experience (academic or not!) that features prominently in your memory of your time here.',
            a3 : 'There are in a sense too many to pick from, I truly cherished my time here at SNU. Perhaps I can pick one non-academic and one academic memory? I remember participating in a 48-hour short film challenge in my first year. I do not remember the organization that held it, but it was a national-level film organization. It was absolutely thrilling to be a part of this initiative. Since I was in my first year and first semester, it really gave me the opportunity to become better acquainted with campus and Dadri! I had a wonderful team, and while we did not win any prizes, the adrenaline and excitement of shooting a whole short film in two days were deeply memorable, and I made some wonderful friends along the way too. A more academic memory that was wonderful was the day of graduation. It was of course a bittersweet moment to say goodbye to people I had known for four years and leaving the space of SNU itself was difficult. In fact, because of COVID, I had barely spent a little over two years at SNU. However, I was deeply grateful for my time there and just glad to have an in-person graduation! That last week was truly special- I was able to say goodbye to friends and professors one last time, and spend time at my favourite spots at SNU, my mother came to watch me graduate, and I was delighted that our keynote speaker was the brilliant Nobel Laureate Kailash Satyarthi. I have admired his work with the “Save the Childhood Movement” and children’s rights activism.',
            q4 : 'What do you miss most about life at university?',
            a4 : 'Perhaps one of the things that I miss about life as an undergraduate is a space where I was less self-conscious about making mistakes and freer with testing ideas, thoughts and projects. Besides that, I miss the excellent faculty at SNU, who were such brilliant mentors and my fantastic friends, who were caring, kind and endlessly funny. I could not have enjoyed my time here as much without them.',
            q5 : 'What advice would you give your juniors just beginning their lives here?',
            a5 : 'I do not know if I am best placed to give advice…all I can say is that for most people, the undergraduate degree is a journey where people really come into themselves as people. I do not remember a point in my life when my mind was more occupied by questions, thoughts, ideas, fears, hopes and dreams. We are confronted with a lot in our undergraduate which perhaps uncomfortable/question things about our current reality, policies, ethics and leaders. I think it is useful to sit with those questions and allow them to germinate, grow, and evolve. I think being both kind to oneself and critical of the world and our place in it are tools that stood me in good stead. Lastly, do not feel afraid to take space and have opinions. I feel that it is often students from weaker economic sections, lower castes, queer, non-conforming or women who experience the deep tensions with taking up space in different ways. Just remember that you are just as entitled to the space as anyone else.',
            q6 : 'What do you do for fun!',
            a6 : 'Some things that I love to do for fun include reading, listening to music, watching movies and cooking! I absolutely adore trekking, meditating and practising yoga. When I was at SNU, I loved going for yoga classes most mornings before classes. It always felt like a really relaxing and productive start to the day. Academia can be rather sedentary so any chance to be active is a blessing! SNU is also a wonderful campus to own a cycle on and early morning cycle rides inside and outside the campus were really fantastic!',
        },
    ]
    const params = useParams();

  return (
    <>
        <Navbar /> 
        <div className='writer_container'>
                {spotlight.map((blog) => {
                    if (blog.id === parseInt(params.id)) {
                        return (
                            <>
                                <div className='writer_main_container'>
                                    <div className='writer_intro' >
                                        <div className='writer_container_header'>
                                            <img className='writer_image' src={blog.image} alt='writer_image' />
                                            <p className='writer_name'>{blog.name}</p>
                                        </div>
                                        <div className='writer_intro_text'>
                                            <p className='writer_question'>{blog.q1}</p>
                                            <p className='writer_answer'>{blog.a1}</p>
                                        </div>
                                    </div>
                                    <p className='writer_question'>{blog.q2}</p>
                                    <p className='writer_answer'>{blog.a2}</p>
                                    <p className='writer_question'>{blog.q3}</p>
                                    <p className='writer_answer'>{blog.a3}</p>
                                    <p className='writer_question'>{blog.q4}</p>
                                    <p className='writer_answer'>{blog.a4}</p>
                                    <p className='writer_question'>{blog.q5}</p>
                                    <p className='writer_answer'>{blog.a5}</p>
                                    <p className='writer_question'>{blog.q6}</p>
                                    <p className='writer_answer'>{blog.a6}</p>
                                </div>
                            </>
                        )
                    } 
                    return null;
                })}
            </div>
        <Footer />
    </>
  )
}

export default SpotLightContent
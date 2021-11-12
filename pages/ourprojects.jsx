import React from 'react'
import { Row, Col } from 'antd'
import { Parallax } from 'rc-scroll-anim'
import styles from '@Components/Titles.module.css'

const projectsData = [
	{
		title: 'Kindness Festival',
		description:
			"The Kindness Festival is an annual free, inclusive, creative and comprehensive event designed for everyone in the NT who wants to learn and embrace diversity and the importance of international students and multicultural communities in Australia. \n\nJoin us to celebrate the Northern Territory as a melting pot of cultural diversity. It's a day full of activities, cultural performances, international food stalls. There's also an art expo, an inclusive party, and a few surprises. By international students, for everyone! ",
		image: '/static/img/projects/Kindness Festival.jpg'
	},
	{
		title: 'Meals Of Kindness',
		description:
			'Due to unexpected lockdown in the greater Darwin regions, Kindness Shake with Red Cross has provided free meals for international students and temporary visa holders in need.\n\nMeals of Kindness is brought to you by Kindness Shake and the Australian Red Cross, Northern Territory Government and Charles Darwin University. ',
		image: '/static/img/projects/mealsofkindness.png'
	},
	{
		title: 'LingoToMingle',
		description:
			'LingoToMingle is a monthly event where all international students in the NT will be welcomed to practice English or any other language they would like to improve, such as Korean, Vietnamese, Mandarin, Spanish, Hindi, Nepali and more. ',
		image: '/static/img/projects/Lingo_logo.png'
	},
	{
		title: 'Meet a Local',
		description:
			'“Meet a Local” is a series of networking events, developed by the Rotary Club of Darwin Sunrise in collaboration with Kindness Shake, which aims to remove barriers and provide opportunities for international students to learn new skills, practise English and make local acquaintances. ',
		image: '/static/img/projects/MEET A LOCAL.png'
	},
	{
		title: 'SkillUp2ScaleUp\nEmployability Program',
		description:
			'Series of employability webinars and networking events by the #KindnessShake and sponsored by the Northern Territory Government.\n\nThroughout the series, we help students and recent graduates improve their work-ready skills, enhance their employability, build networks and answer all their questions (online and in person). At our events you will be welcomed into our community of driven students and graduates who partnered with different local businesses and organisations, all seeking to improve the employability skills and brighten the futures of all attendees. ',
		image: '/static/img/projects/SkillUp_main Fb post.png'
	},
	{
		title: 'Power of Many Colours \nin collaboration with Red Cross NT ',
		description:
			'Red Cross with Kindness Shake organised a full-day activity-filled event for international students, temporary visa holders and other vulnerable Territorians, including refugees and asylum seekers. \n\nThe idea was to present cultural food, performances and traditional dress to the multicultural community in the NT while supporting 400 international students and visa holders who are in financial difficulties with grocery packs, vouchers for hygiene products and pre-cooked takeaway meals. ',
		image: '/static/img/projects/POMC.png'
	},
	{
		title: 'Friday Food Service ',
		description:
			'Friday Food Service was a community-led initiative by Kindness Shake that aims to provide a weekly free meal to those experiencing financial hardship due to COVID-19. \n\nIn collaboration with local businesses, multicultural groups, education providers, and Government, the project’s objective is to ensure that no one in the NT affected by the crisis, especially international students, go to bed without a meal (and a kind and genuine smile). ',
		image: '/static/img/projects/FRIDAY FOOD SERVICE.jpg'
	},
	{
		title: 'Migration Pathway & \nProfessional Resume Writing ',
		description:
			'Discussing the current trend of migration and education, presented by Migration Agents and a workshop on how to write a professional resume. ',
		image: '/static/img/projects/Migration_FbPost.png'
	},
	{
		title: '"Shine On Me" \n2020 International Students Karaoke Competition ',
		description:
			'The aim is to encourage international students living in the Northern Territory (NT) to show their talents and engage with the community as a suitable way to socialize, providing a harmonious life and study environment. We want to enrich the Territory international student experience, showcase the Territory as a study destination and provide students with an opportunity to shine and expand their networks. ',
		image: '/static/img/projects/Shine-On-Me_poster.png'
	}
]


const OurProjects = () => {
	return (
		<>
			<div className="home-page-wrapper">
				<h1 className="text-center mt-5">OUR PROJECTS</h1>
				<div className="teams3-wrapper">
					{projectsData.map(item => (
						<Parallax
							animation={{ x: 0, opacity: 1, playScale: [-0.2, 0.8] }}
							style={{ transform: 'translateX(-100px)', opacity: 1 }}
						>
							<Row align="middle" justify="center">
								<Col
									xs={{ span: 24 }}
									lg={{ span: 10 }}
									className="m-auto"
									align="middle"
									justify="center"
								>
									<div>
										<img
											src={item.image}
											width="100%"
											height="100%"
											alt="img"
                                            className="mt-1"
										/>
									</div>
								</Col>
								<Col
									xs={{ span: 20 }}
									lg={{ span: 10 }}
									className="m-auto"
									align="middle"
									justify="center"
								>
									<div className={styles.titleAwards}>{item.title}</div>
									<div className={styles.contentAwards}>{item.description}</div>
									<br></br>
								</Col>
							</Row>
						</Parallax>
					))}
				</div>
			</div>
		</>
	)
}

export default OurProjects

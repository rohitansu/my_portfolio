import { about } from '@/lib/data';

const About: React.FC = () => {
	return (
		<div className='mt-[0.25rem] mb-[0.75rem] pt-[0.5rem] leading-6 flex flex-col gap-4' data-testid='about'>
			<p>
				Hello! I&apos;m <span className='font-bold'>{about.fullName}</span>, a {about.position} with a penchant for tech
				and a knack for securing the digital world. With a degree in Computer Science and a roster of certifications,
				I&apos;m your trusty digital defender.
			</p>
			<p>
				From blockchain projects to network security, I&apos;ve got you covered. My toolkit includes Parrot, Burp, and a
				strong dose of problem-solving skills. I&apos;m on a mission to bolster cybersecurity, one byte at a time.
			</p>
			<p>
				Let&apos;s connect and explore the cybersecurity landscape, or perhaps share a professional tech insight. After
				all, in the world of technology, knowledge is power.
			</p>

			<span>#CybersecurityExpertHello</span>
		</div>
	);
};

export default About;

const About: React.FC = () => {
	return (
		<div className='mt-[0.25rem] mb-[0.75rem] pt-[0.5rem] leading-6' data-testid='about'>
			<p>
				Hi, my name is <span className='font-bold'>Sat Naing</span>!
			</p>
			<p>
				I&apos;m <span className='font-bold'>a full-stack developer</span> based in Yangon, Myanmar.
			</p>
			<p>
				I am passionate about writing codes and <br />
				developing web applications to solve real-life challenges.
			</p>
		</div>
	);
};

export default About;

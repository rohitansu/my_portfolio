const Education: React.FC = () => {
	return (
		<div className='p-[1.25rem] pt-[0.75rem] flex flex-col-reverse max-h-screen-2rem  ' data-testid='education'>
			<div className='mb-3'>Here is my education background!</div>
			{eduBg.map(({ title, desc }) => (
				<li className='mb-4' key={title}>
					<div className='title font-bold mb-1'>{title}</div>
					<div className='desc'>{desc}</div>
				</li>
			))}
		</div>
	);
};

const eduBg = [
	{
		title: 'B.Sc (Hons) in Computing',
		desc: 'Edinburgh Napier University | 2018 ~ 2019',
	},
	{
		title: 'HND in Computing & System Development',
		desc: 'Info Myanmar University | 2016 - 2018',
	},
	{
		title: 'IELTS 6.5',
		desc: 'British Council Myanmar | 2017',
	},
];

export default Education;

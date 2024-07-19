import Link from 'next/link';

const Welcome: React.FC = () => {
	return (
		<div className='flex flex-wrap lg:mb-6' data-testid='welcome'>
			<div className='info-section '>
				<div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
				<div className='my-3'>----</div>
				<div>
					This project&rsquo;s source code can be found in this project&rsquo;s{' '}
					<Link href='https://github.com/satnaing/terminal-portfolio'>GitHub repo</Link>.
				</div>
				<div className='my-3'>----</div>
				<div>
					For a list of available commands, type `<a className='text-red-500'>help</a>`.
				</div>
			</div>
		</div>
	);
};

export default Welcome;

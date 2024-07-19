import { useContext } from 'react';
import _ from 'lodash';
import { termContext } from '../terminal';

const Email: React.FC = () => {
	const { history, rerender } = useContext(termContext);

	/* ===== get current command ===== */
	const currentCommand = _.split(history[0], ' ');

	if (rerender && currentCommand[0] === 'email' && currentCommand.length <= 1) {
		window.open('mailto:' + 'contact@satnaing.dev', '_self');
	}

	return (
		<p className='p-[1.25rem] pt-[0.75rem] flex flex-col-reverse max-h-screen-2rem  ' data-testid='email'>
			<span>contact@satnaing.dev</span>
		</p>
	);
};

export default Email;

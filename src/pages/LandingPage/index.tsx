import helper from '../../helper/stateManagement';
import InputContainer from '../../components/InputContainer';
import SVG from './SVG';
import './index.css';
const Index = ({ data }: any) => {
	const state = helper(data.base_code, data.conversion_rates);
	const {
		input1Value,
		input1Currency,
		input2Value,
		input2Currency,
		changeInput1Value,
		changeInput2Value,
		changeInput1Currency,
		changeInput2Currency,
		switchValue,
	} = state;
	const LastUpdated = new Date(
		data.time_last_update_unix * 1000,
	).toLocaleString();
	return (
		<div className='landing-page'>
			<div className='header'>
				<span>Currency Exchange</span>
			</div>
			<div className='input-container'>
				<div className='input1'>
					<InputContainer
						data={Object.keys(data.conversion_rates)}
						inputValue={input1Value}
						setInputValue={changeInput1Value}
						currency={input1Currency}
						setCurrency={changeInput1Currency}
					/>
				</div>
				<div className='switch-btn'>
					<button
						onClick={(e) => {
							e.preventDefault();
							switchValue();
						}}>
						<SVG />
					</button>
				</div>
				<div className='input2'>
					<InputContainer
						data={Object.keys(data.conversion_rates)}
						inputValue={input2Value}
						setInputValue={changeInput2Value}
						currency={input2Currency}
						setCurrency={changeInput2Currency}
					/>
				</div>
			</div>
			<div className='updated'>
				<span> Last Updated-{LastUpdated}</span>
			</div>
		</div>
	);
};

export default Index;

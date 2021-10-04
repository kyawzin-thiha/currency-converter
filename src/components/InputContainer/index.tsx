import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './index.css';

const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: 50 * 4.5 + 10,
			width: 250,
		},
	},
};

type props = {
	data: string[];
	inputValue: string;
	setInputValue: Function;
	currency: string;
	setCurrency: Function;
};

const Index = ({
	data,
	inputValue,
	setInputValue,
	currency,
	setCurrency,
}: props) => {
	const SelectHandleChange = (event: SelectChangeEvent<typeof currency>) => {
		const {
			target: { value },
		} = event;
		setCurrency(value);
	};
	const InputHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length > 8) {
			return;
		}
		if (!e.target.value) {
			setInputValue('');
			return;
		}
		setInputValue(e.target.value);
	};
	return (
		<div className='container'>
			<div className='input'>
				<input
					type='number'
					value={inputValue}
					onChange={InputHandleChange}
					placeholder='0000'
				/>
			</div>
			<div className='select'>
				<FormControl sx={{ width: 200 }} size='small'>
					<InputLabel id='demo-multiple-chip-label'>Currency</InputLabel>
					<Select
						value={currency}
						onChange={SelectHandleChange}
						input={<OutlinedInput id='select-multiple-chip' label='Currency' />}
						MenuProps={MenuProps}>
						{data.map((data) => (
							<MenuItem key={data} value={data}>
								{data}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
		</div>
	);
};

export default Index;

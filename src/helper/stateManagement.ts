import { useState } from 'react';
import baseCurrency from './baseValue';
const ManageState = (base: string, data: any) => {
	const [input1Value, setInput1Value] = useState<string>('.');
	const [input2Value, setInput2Value] = useState<string>('.');
	const [input1Currency, setInput1Currency] = useState<string>(base);
	const [input2Currency, setInput2Currency] = useState<string>(base);
	const [input1BaseValue, setInput1BaseValue] = useState<number>(1);
	const [input2BaseValue, setInput2BaseValue] = useState<number>(1);

	return {
		changeInput1Value: (value: string): void => {
			setInput1Value(value);
			const convertedValue = (
				parseFloat(value) *
				input1BaseValue *
				data[input2Currency]
			).toFixed(2);
			setInput2Value(convertedValue);
		},
		changeInput2Value: (value: string): void => {
			setInput2Value(value);
			const convertedValue = (
				parseFloat(value) *
				input2BaseValue *
				data[input1Currency]
			).toFixed(2);
			setInput1Value(convertedValue);
		},
		changeInput1Currency: (value: string): void => {
			setInput1Currency(value);
			let input1BaseValue;
			if (value === base) {
				input1BaseValue = 1;
			} else {
				input1BaseValue = baseCurrency(data[value]);
			}
			setInput1BaseValue(input1BaseValue);
			const convertedValue = (
				data[value] *
				parseFloat(input2Value) *
				input2BaseValue
			).toFixed(2);
			setInput1Value(convertedValue);
		},
		changeInput2Currency: (value: string): void => {
			setInput2Currency(value);
			let input2BaseValue;
			if (value === base) {
				input2BaseValue = 1;
			} else {
				input2BaseValue = baseCurrency(data[value]);
			}
			setInput2BaseValue(input2BaseValue);
			const convertedValue = (
				data[value] *
				input1BaseValue *
				parseFloat(input1Value)
			).toFixed(2);
			setInput2Value(convertedValue);
		},
		switchValue: (): void => {
			const tempInput1Value: string = input1Value;
			const tempInput1Currency: string = input1Currency;
			setInput1Value(input2Value);
			setInput1Currency(input2Currency);
			setInput2Value(tempInput1Value);
			setInput2Currency(tempInput1Currency);
		},
		input1Value,
		input1Currency,
		input2Value,
		input2Currency,
	};
};

export default ManageState;

import styled from 'styled-components';

const TextField = styled.input`
	font-size: 20px;
	margin-bottom: 15px;
	padding: 5px 10px;
	border-radius: 5px;
	border: 1px solid #dedede;
	background-color: #f2f2f2;
`;

const ErrorMessage = styled.p`
	font-size: 18px;
	color: red;
	text-align: left;
`;

export { TextField, ErrorMessage };

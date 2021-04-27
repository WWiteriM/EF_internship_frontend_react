import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	color: black;
`;

const RegisterContainer = styled.div`
	padding: 40px;
	width: 80%;
	max-width: 500px;
	border: 1px solid #dedede;
	background-color: darkgrey;
	text-align: center;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
	-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
	-moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;

export {
  Wrapper, RegisterContainer,
};

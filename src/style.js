import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family:
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			'Roboto',
			'Oxygen',
			'Ubuntu',
			'Cantarell',
			'Fira Sans',
			'Droid Sans',
			'Helvetica Neue',
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
	}

	form {
		display: flex;
		flex-direction: column;
	}

	button {
		height: 50px;
		background-color: #09f;
		color: #fff;
		border: none;
		border-radius: 5px;
		margin-bottom: 20px;
		font-size: 28px;
	}
`;

export default GlobalStyle;

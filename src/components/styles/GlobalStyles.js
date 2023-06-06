import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
	--color-blue-100: #9ee2ff;
	--color-blue-200: #56d4ff;
	--color-blue-300: #1ecaff;
	--color-blue-400: #1ab4f0;
	--color-blue-500: #14a0db;
	--color-blue-600: #1188c6;
	--color-blue-700: #0e74b2;
	--color-blue-800: #0b5f9e;
	--color-blue-900: #084b8a;
	--color-green-100: #95ffcc;
	--color-green-200: #41fab0;
	--color-green-300: #00f49b;
	--color-green-400: #00e589;
	--color-green-500: #00d077;
	--color-green-600: #00b96d;
	--color-green-700: #00a661;
	--color-green-800: #008a4e;
	--color-green-900: #006838;
	--color-gray-100: #e6e6e6;
	--color-gray-200: #cccccc;
	--color-gray-300: #b3b3b3;
	--color-gray-400: #999999;
	--color-gray-500: #808080;
	--color-gray-600: #666666;
	--color-gray-700: #4d4d4d;
	--color-gray-800: #333333;
	--color-gray-900: #141414;
	--color-orange-100: #fff5d9;
	--color-orange-200: #ffe8b0;
	--color-orange-300: #ffd280;
	--color-orange-400: #ffbe55;
	--color-orange-500: #ffa726;
	--color-orange-600: #ff8c00;
	--color-orange-700: #e57300;
	--color-orange-800: #cc5f00;
	--color-orange-900: #b04d00;
	--color-pink-100: #f8bbd0;
	--color-pink-200: #f48fb1;
	--color-pink-300: #f06292;
	--color-pink-400: #ec407a;
	--color-pink-500: #e91e63;
	--color-pink-600: #d81b60;
	--color-pink-700: #c2185b;
	--color-pink-800: #ad1457;
	--color-pink-900: #880e4f;
  font-size:62.5%;
}
* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body, html{
    width: 100vw;
    height: 100vh;
  }

  body {
    background: linear-gradient(180deg, #084B8A 0%, #141414 60%);
    background-attachment: fixed;
    color: var(--color-gray-100);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
#LINKS
Link to the PPT: https://drive.google.com/drive/folders/1QG7DfazAdYYEaMcQjaFxUmOv4Eqsq5lI?usp=sharing  
SETUP:-

1. BLOCKCHAIN:-

Download ganache from https://www.trufflesuite.com/ganache this will act as the local blockchain node, with trail accounts which are pre-funded with ether. Note that any actual transactions in a blockchain will cost a gas fee, which costs ether, which in turn costs real money.

To program smart contract Remix ide was used(https://remix.ethereum.org/), the smart contracts will be made using the solidity programming language
Download web3 python library by typing "pip install web3" in the terminal or the command line. This will enable communication between our smart contract and our Flask backend

2. FRONTEND:-

Use npm install to install all the dependencies. Use npm start on terminal to start the localhost.

3. BACKEND:-

Firstly, setup virtual environment on the system using py -m venv env on windows and python3 -m venv env on linux/macOS.
To activate virtual environment, use .\env\Scripts\activate on windows and source env/bin/activate on linux/macOS.
Then pip install flask, flask-sqlalchemy.
Then user python app.py on terminal while on root directory to start the backend server simultaneously running npm start on other terminal.

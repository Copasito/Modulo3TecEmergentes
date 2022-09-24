import { ethers } from './ethers-5.1.esm.min.js'
const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
const signer = provider.getSigner()
var abi;
var contractAddress;


abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "fechaParticipacion",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "cedulaEstudiante",
				"type": "uint256"
			}
		],
		"name": "emitirCertificado",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "nombreCurso",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "fechaCurso",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "cedulaEstudiante",
				"type": "uint256"
			}
		],
		"name": "cosultarCertificado",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "curso",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fecha",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "len",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

contractAddress = '0xe63A88e1112d9A32311A4656edC96ff1d4686e5F';
const contract = new ethers.Contract(contractAddress, abi, signer);

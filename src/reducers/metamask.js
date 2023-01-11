import { SET_METAMASK_ADDRESS, NO_ACTION, SET_METAMASK_BALANCE , SET_ALLOWANCES} from "../actions/types";

const initialState = {
    isMetaMaskConnected: null,
    metaMaskAddress: null,
	metaMaskBalance: null,
	allowances: null 
};

const metamask = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
        case SET_METAMASK_ADDRESS:
            return{
                ...state,
                metaMaskAddress: payload,
                isMetaMaskConnected: true
            }
		case SET_METAMASK_BALANCE:
			return{
				...state,
				metaMaskBalance: payload
			}
		case SET_ALLOWANCES:
			return{
				...state,
				allowances: payload
			}	
		case NO_ACTION:
		default:
			return state;
	}
};

export default metamask;

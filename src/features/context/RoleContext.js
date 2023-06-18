import { createContext } from 'react';

const RoleContext = createContext({
	role: null,
	setRole: () => {},
});

export default RoleContext;

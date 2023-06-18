import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useHandleNavigate = (onClickHandler) => {
	const navigate = useNavigate();
	return useCallback(
		(route) => (/* EVENT */) => {
			if (onClickHandler) {
				onClickHandler();
			}
			navigate(route);
		},
		[onClickHandler],
	);
};

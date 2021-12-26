import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchCartRequest } from "@Components/ecommerce/redux/actions/cartActions";
import { fetchWishListRequest } from "@Components/ecommerce/redux/actions/wishlistActions";

export default function FetchInitData({ children }) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCartRequest());
		dispatch(fetchWishListRequest());
	}, []);
	return children;
}

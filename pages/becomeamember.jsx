import React, { useState, useEffect } from 'react'
import { Form, Input, InputNumber, Button, Select } from 'antd'

const Membership = () => {
	return (
		<>
			<iframe
				width="100%"
				height="600px"
				frameborder="no"
				src="https://ksi.wildapricot.org/widget/join-us"
			></iframe>
			<br />
			<script
				type="text/javascript"
				language="javascript"
				src="https://ksi.wildapricot.org/Common/EnableCookies.js"
			></script>
		</>
	)
}

export default Membership

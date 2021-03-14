import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import MobileNavbar from '@Components/MobileNavbar'

const DesktopNavbar = dynamic(() => import('@Components/DesktopNavbar'), {
	ssr: false
})

const MultiDropdownNavbar = () => {
	const [current, setCurrent] = useState('mail')
	const [tabIndex, setTabIndex] = useState(0)

	const breakpoint = 620
	const [width, setWidth] = useState(100)

	return (
		<>
			{/* <MobileNavbar /> */}
			<DesktopNavbar />
		</>
	)
}

export default MultiDropdownNavbar

import React from 'react';
import {withRouter} from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
	<div
		className={`${size} menu-item`}
		onClick={() => history.push(`${match.url}${linkUrl}`)}>
		<div
			className='background-image'
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		/>
		<div className='content'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<span className='subtitle'>SHOP NOW</span>
		</div>
	</div>
);

// with router adalah
// higher order component
// a function that takes a component as an argument
// dan jadi komponen yang sudah di modifikasi
// sepert high order funtion di js
// is function that takes any component and modifeis it in some way and than return new modified componen
// kode di bawah menu item di berikan akses seperti withrouter yang bisa menjadi global dalam mengaksi props (sperti -location -match - history di prop link)
export default withRouter(MenuItem);

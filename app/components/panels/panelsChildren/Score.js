import React, { Component } from 'react';

const PlayerButtonsStyling = {
  border: '1px solid red',
  width: '100%',
  height: '100%',

}

const PlayerButtonWrapper = {
	height: '100%',

}

class Score extends Component {
	
	render() {
		return (
			<div className='row' style={PlayerButtonWrapper}>
				<div className='col-xs-12' style={PlayerButtonsStyling}>
					S
				</div>
			</div>
		)
	}
}

export default Score;
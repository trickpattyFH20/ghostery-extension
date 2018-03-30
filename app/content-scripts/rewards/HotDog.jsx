import React, { Component } from 'react';
import msgModule from '../utils/msg';
import { log } from '../../../src/utils/common';
import '../../scss/rewards.scss';

const msg = msgModule('hotdog');
const { sendMessage } = msg;
const { onMessage } = chrome.runtime;

class HotDog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			closed: false,
			rewardsCount: 1
		};
	}

	close() {
		this.setState({
			closed: true
		});
	}

	render() {
		return (
			<div>
				{ this.state.closed !== true &&
					<div className="ghostery-rewards-container ghostery-top ghostery-right ghostery-collapsed">
						<div className="ghostery-box">
							<div className={`ghostery-reward-text ${this.state.rewardsCount > 0 ? 'show' : 'hide'}`}>
								{`${this.state.rewardsCount} ${this.state.rewardsCount > 1 ? t('rewards_text_plural') : t('rewards_text_single')}`}
							</div>
							<div className="ghostery-reward-close" onClick={this.close.bind(this)} />
						</div>
					</div>}
			</div>
		);
	}
}

export default HotDog;

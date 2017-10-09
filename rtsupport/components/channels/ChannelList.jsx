import React, {Component} from 'react';
import Channel from './Channel.jsx';

class ChannelList extends Component {
    render() {
        return (
            <ul>
                {this.props.channels.map(channel => <Channel
                    key={channel.id}
                    channel={channel}
                    {...this.props}
                />)}
            </ul>
        )
    }
}

// ChannelList.propTypes = {
//     channels: React.PropTypes.array.isRequired,
//     setChannel: React.PropTypes.func.isRequired
// };

export default ChannelList
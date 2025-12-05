import React from 'react'
import { FillSpaceError, LargeEmoji, Heading, Subheading } from './style'
// import { Button } from '../buttons'

class ViewError extends React.Component {
  render() {
    const { heading, subheading, emoji, children, small, dataCy } = this.props

    const moji = emoji || '😌'
    const head = heading || 'We could all use a refresh.'
    const subhead = subheading || 'Refresh this page to try again.'

    return (
      <FillSpaceError small={small} data-cy={dataCy}>
        <LargeEmoji small={small} role="img" aria-label="Emoji">
          {moji}
        </LargeEmoji>
        <Heading small={small}>{head}</Heading>
        <Subheading small={small}>{subhead}</Subheading>
        {this.props.error && <pre style={{ textAlign: 'left' }}>{this.props.error.toString()}</pre>}
        {children}
      </FillSpaceError>
    )
  }
}

export default ViewError

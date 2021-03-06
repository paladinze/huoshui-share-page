import React, { PropTypes } from 'react'
import { Card } from 'semantic-ui-react'
import styles from './styles/CardRank.scss'
import { OSS_DOMAIN_SITE } from '../../constants/ApiEndpoints'

const propTypes = {
  image: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

const CardRank = props => (
  <Card
    className={styles.cardRaise}
    onClick={() => { props.history.push(`/rankings/${props.id}`) }}
    style={{ display: 'block' }}
  >
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        paddingBottom: '56.25%',
        position: 'relative',
        backgroundImage: `url(${OSS_DOMAIN_SITE + props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'block',
      }}
    >
      {
      /*
      <div
        style={{
          background: 'rgba(14, 144, 206, 0.5)',
          overflow: 'hidden',
          position: 'absolute',
          height: '100%',
          width: '100%',
          zIndex: 2,
        }}
      />    */
         }
    </div>

    <Card.Content>
      <Card.Header>
        {props.header}
      </Card.Header>
      <Card.Description>
        {props.description}
      </Card.Description>
    </Card.Content>
  </Card>
)

CardRank.propTypes = propTypes

export default CardRank

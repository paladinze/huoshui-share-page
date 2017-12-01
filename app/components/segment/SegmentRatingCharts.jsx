import React from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'
import ChartPieGap from '../../components/chart/ChartPieGap'
import ChartBar from '../../components/chart/ChartBar'


const SegmentRatingCharts = (props) => {
  const stat = props.Stat
  const countReview = stat ? stat.countReview : 0
  const scoreOverall = ((countReview !== 0) && stat.scoreOverall)
                          ? stat.scoreOverall.toFixed(1) : '0.0'

  return (
    <div >
      <Grid divided >
        <Grid.Row>
          <Grid.Column width={8}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontWeight: '700', color: '#00b5ad' }}>好评率 ({countReview}人参与)</span>
            </div>
            <div style={{ width: '100%', height: '150px', padding: '0px 0px 0px 5px', textAlign: 'center' }}>
              <ChartPieGap {...props.Stat} />
            </div>
          </Grid.Column>
          <Grid.Column width={8}>
            <div style={{ textAlign: 'center' }}>
              <span style={{ fontWeight: '700', color: '#00b5ad' }}>综合评分 ({scoreOverall}分)</span>

            </div>
            <div style={{ width: '100%', height: '150px', padding: '15px 10px 0px 0px', textAlign: 'center', marginLeft: '0px !important' }}>
              <ChartBar {...props.Stat} />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

SegmentRatingCharts.defaultProps = {
  Stat: {
    countReview: 0,
    scoreOverall: 0,
  },
}

export default SegmentRatingCharts

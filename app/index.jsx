import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Item, Container, Comment, Button, Header, Grid, Divider, Icon } from 'semantic-ui-react'
import axios from 'axios'
import Rating from './components/rating/RatingBasic'
import ReviewItem from './components/review/ReviewItem'
import TopBanner from './components/banner/TopBanner'
import Spinner from './components/spinner/Spinner'
import SegmentRatingCharts from './components/segment/SegmentRatingCharts'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      reviews: [],
      data: {},
      stat: [],
      prof: {},
    }
  }

  componentDidMount() {
    // parse url
    let path = location.pathname
    let pathArr = path.replace(/\//,'').split('/')
    const courseId = pathArr[1]
    const coursePath = pathArr[0]

    // api call
    if (coursePath != 'courses' || pathArr.length != 2 ) { return }
    const PROD = "https://api.huoshui.org"
    const DEV = "http://localhost:1337"
    let api_url = `${PROD}/${coursePath}/${courseId}?populate=all`

    axios.get(api_url).then((results) => {
      console.log(results.data)
      const data = results.data
      this.setState({
        reviews: data.Reviews,
        stat: data.Stat,
        prof: data.Prof,
        data: data,
        loading: false
      })
    })
  }

  render() {
    const { loading } = this.state

    if(loading) {
      return <div>
        <div style={{
          top: '40%',
          left: '50%',
          marginLeft: '-30px',
          position: 'absolute'
        }}>
          <Spinner />
        </div>
      </div>
    }

    return (
      <div>
        <div className="container-main">
          <TopBanner />
          <div style={{marginBottom: '1em'}}>
            <div style={{textAlign: "center"}}>
              <Header
                textAlign="center"
                size='medium'
              >
                {this.state.data.name}
              </Header>
              <span style={{ fontSize: '18px' }}>
                <Rating value={this.state.data.scoreOverall.toFixed(0)} maxStars={this.state.data.scoreOverall.toFixed(0)}/>
              </span>
            </div>
          </div>
          <Grid >
            <Grid.Row>
              <Grid.Column width={8}>
                <div style={{ textAlign: 'center' }}>
                  <Icon name='user' size='large' style={{color: '#00b5ad'}} />
                  <span style={{ fontWeight: '500', color: '#00b5ad' }}>姓名: {this.state.prof.name}</span>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div style={{ textAlign: 'center' }}>
                  <Icon name='student' size='large' style={{color: '#00b5ad'}} />
                  <span style={{ fontWeight: '500', color: '#00b5ad' }}>职位: 副教授</span>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <SegmentRatingCharts
            Stat={this.state.stat}/>

          <Container>
            <Grid >
              <Grid.Row style={{padding: '0.5em'}}>
                <Grid.Column width={2} style={{textAlign: 'right', padding: '0'}}>
                  <span style={{color: '#80808078'}}>点评</span>
                </Grid.Column>
                <Grid.Column width={14}>
                  <Divider/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>

          <Container style={{marginTop: '1em'}}>
            <Comment.Group>
              {
                this.state.reviews && this.state.reviews.map((review) => (
                  <ReviewItem key={review.id} {...review}/>
                ))
              }
            </Comment.Group>
          </Container>
        </div>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'))
